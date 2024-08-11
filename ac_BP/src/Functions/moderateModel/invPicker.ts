import { world, EquipmentSlot, Player, ItemStack, Entity } from "@minecraft/server";


function fetchInventory (entity: Entity): ItemStack[] {
  const container = entity.getComponent('inventory')!.container!;
  let inventory = Array.from({ length: container.size }, (_, i) => container.getItem(i) || { typeId: 'air' } as unknown as ItemStack);
  return (entity instanceof Player) ? inventory.slice(9).concat(inventory.slice(0, 9)) : inventory;
}

function stringifyInventory(inventory: ItemStack[]): string {
  return JSON.stringify(inventory.map(item => {
    return {
      typeId: item?.typeId || 'air',
      amount: item?.amount || 0
    };
  }));
}

function fetchPlayerEquipments(player: Player): (ItemStack)[] {
  const equipment = player.getComponent('equippable')!;
  return [ equipment.getEquipment(EquipmentSlot.Head)!, equipment.getEquipment(EquipmentSlot.Chest)!, equipment.getEquipment(EquipmentSlot.Legs)!, equipment.getEquipment(EquipmentSlot.Feet)!, equipment.getEquipment(EquipmentSlot.Offhand)! ];
}


/**
 * 
 * @param { import('@minecraft/server').ItemStack[] } equipment 
 * 
 * @returns { string }
 */
function transformEquipmentStatsToString(equipment: ItemStack[]): string {
  return equipment.map(item => {
    return !item?.typeId ? 'b' : 'a';
  }).join('').replace(/[\[\],"]/g, '');
}

function getInventoryViewerEntities(dimension: string): Entity[] {
  return world.getDimension(dimension).getEntities({ type: 'matrix:inventory', tags: ['invsee'] });
}


/**
 * 
 * @param { import('@minecraft/server').Entity } entityProjector 
 */
function checkSync(entityProjector: Entity) {

  const target = world.getEntity(entityProjector.getDynamicProperty('invsee:target') as string)! as Player;

  const playerInventory = stringifyInventory(
    fetchInventory(target)
    .concat(fetchPlayerEquipments(target))
  );
  const viewerInventory = stringifyInventory(fetchInventory(entityProjector));

  if (playerInventory !== target.getDynamicProperty('invsee:old_log')) {
    pullChange(entityProjector, target);
  } else if (viewerInventory !== entityProjector.getDynamicProperty('invsee:old_log')) {
    pushChange(entityProjector, target);
  }

  target.setDynamicProperty('invsee:old_log', playerInventory);
  entityProjector.setDynamicProperty('invsee:old_log', viewerInventory);

  entityProjector.removeTag('updating');

}


function pullChange(entityProjector: Entity, target: Player) {

  if (entityProjector.hasTag('updating')) return;
  entityProjector.addTag('updating');

  const inventory = fetchInventory(target);
  const equipment = fetchPlayerEquipments(target);

  const entityProjectorContainer = entityProjector.getComponent('inventory')!.container!;
  entityProjector.nameTag = `_r4ui:inventory:${transformEquipmentStatsToString(equipment)}:${target.name}`;
  entityProjectorContainer.clearAll();

  for (let i = 0; i < 36; i++) {
    if (inventory[i].typeId !== 'air') entityProjectorContainer.setItem(i, inventory[i]);
    else continue;
  }
  for (let i = 45; i < 53; i++) {
    if (equipment[i - 45]?.typeId !== 'air') entityProjectorContainer.setItem(i, equipment[i - 45]);
    else continue;
  }

}


function pushChange(entityProjector: Entity, target: Player) {

  if (entityProjector.hasTag('updating')) return;
  entityProjector.addTag('updating');

  const targetContainer = target.getComponent('inventory')!.container!;
  const targetEquipment = target.getComponent('equippable')!;

  const viewerInventory = fetchInventory(entityProjector).slice(0, 36);
  const viewerInventorySlice = [...viewerInventory.slice(-9), ...viewerInventory.slice(0, -9)];
  const viewerEquipment = fetchInventory(entityProjector).slice(45, 53);

  entityProjector.nameTag = `_r4ui:inventory:${transformEquipmentStatsToString(viewerEquipment)}:${target.name}`;

  const indexToEquipment: { [key: number]: EquipmentSlot } = {
    45: EquipmentSlot.Head,
    46: EquipmentSlot.Chest,
    47: EquipmentSlot.Legs,
    48: EquipmentSlot.Feet,
    49: EquipmentSlot.Offhand
  }

  targetContainer.clearAll();
  targetEquipment.setEquipment(EquipmentSlot.Head, new ItemStack('air'));
  targetEquipment.setEquipment(EquipmentSlot.Chest, new ItemStack('air'));
  targetEquipment.setEquipment(EquipmentSlot.Legs, new ItemStack('air'));
  targetEquipment.setEquipment(EquipmentSlot.Feet, new ItemStack('air'));
  targetEquipment.setEquipment(EquipmentSlot.Offhand, new ItemStack('air'));

  for (let i = 0; i < 36; i++) {
    if (viewerInventorySlice[i].typeId !== 'air') targetContainer.setItem(i, viewerInventorySlice[i]);
    else continue;
  }
  for (let i = 45; i < 53; i++) {
    if (viewerEquipment[i - 45].typeId !== 'air') targetEquipment.setEquipment(indexToEquipment[i], viewerEquipment[i - 45]);
    else continue;
  }


}

/*
system.runTimeout(() => {
  world.afterEvents.itemStartUse.subscribe(
    event => {
      const { itemStack, source } = event;
      if (itemStack.typeId !== 'matrix:inventory') return;
      showUIPicker(source)
    }
  )
  system.runInterval(() => {
    const inventoryViewerEntities = getInventoryViewerEntities('minecraft:overworld')
                                    .concat(getInventoryViewerEntities('minecraft:nether'))
                                    .concat(getInventoryViewerEntities('minecraft:the_end'));
    inventoryViewerEntities.forEach(entity => {
      checkSync(entity);
    });
  }, 1)
}, 5)*/

/** @description Should run interval */
function syncEntities () {
    const inventoryViewerEntities = getInventoryViewerEntities('minecraft:overworld')
        .concat(getInventoryViewerEntities('minecraft:nether'))
        .concat(getInventoryViewerEntities('minecraft:the_end'));

    inventoryViewerEntities.forEach(entity => {
        checkSync(entity);
    });
}

function invOfPlayer (player: Player, sourcePlayer: Player): void {
    // Stop player riding.
    stopRiding(player);
    
    const inventory = fetchInventory(player);
    const equipment = fetchPlayerEquipments(player);
  
    const entityProjector = sourcePlayer.dimension.spawnEntity('matrix:inventory', sourcePlayer.location);
    const entityProjectorContainer = entityProjector.getComponent('inventory')!.container!;
  
    entityProjector.nameTag = `_r4ui:inventory:${transformEquipmentStatsToString(equipment)}:${player.name}`;
  
    for (let i = 0; i < 36; i++) {
      if (inventory[i].typeId !== 'air') entityProjectorContainer.setItem(i, inventory[i]);
      else continue;
    }
    for (let i = 45; i < 53; i++) {
      if (equipment[i - 45]?.typeId !== 'air') entityProjectorContainer.setItem(i, equipment[i - 45]);
      else continue;
    }
  
    // sourcePlayer.runCommand(`ride @s start_riding @e[type=matrix:inventory,c=1] teleport_ride`);
    entityProjector.getComponent('rideable')!.addRider(sourcePlayer);
    entityProjector.addTag('invsee');
    entityProjector.setDynamicProperty('invsee:target', player.id);
  
    player.setDynamicProperty('invsee:old_log', stringifyInventory(inventory.concat(equipment)));
    entityProjector.setDynamicProperty('invsee:old_log', stringifyInventory(fetchInventory(entityProjector)));
}

export { syncEntities, invOfPlayer };

function stopRiding (player: Player) {
    const ridingProperty = player.getComponent('riding')?.entityRidingOn;
    if (!ridingProperty) return;
    ridingProperty.getComponent('rideable')!.ejectRider(player);
}