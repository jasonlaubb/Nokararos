import { world, system, GameMode, Player, Vector3, Dimension } from "@minecraft/server";
import { flag, isAdmin } from "../../Assets/Util";
import config from "../../Data/Config";
import { MinecraftBlockTypes, MinecraftEffectTypes } from "../../node_modules/@minecraft/vanilla-data/lib/index";
import lang from "../../Data/Languages/lang";

const previousLocations = new Map<string, Vector3>();
/**
 * @author RaMiGamerDev & ravriv
 * @description This checks if a player velocity is too high.
 */

async function antiFly (player: Player, now: number) {
    //constant the infomation
    const { id, isOnGround, threwTridentAt } = player;

    //get the jump boost effect
    const jumpEffect = player.getEffect(MinecraftEffectTypes.JumpBoost)

    //get the previous location
    const prevLoc = previousLocations.get(id);

    //get the velocity
    const { y: velocity } = player.getVelocity();

    //if player is knocked back, remove the tag and player is falling, remove the tag
    if (player.hasTag("matrix:knockback") && velocity <= 0) {
        player.removeTag("matrix:knockback")
    }

    const slimeUnder = findSlime(player.dimension, player.location)
    if (slimeUnder) {
        player.addTag("matrix:slime")
    } else if (velocity <= 0) player.removeTag("matrix:slime")

    //if player is on ground and velocity is 0, set the previous location
    if (isOnGround && velocity === 0) {
        previousLocations.set(id, player.location);
    }

    //try to increase the velocity limit when player is jumping
    let maxVelocity = player.isJumping ? 0.8 : 0.7

    if (prevLoc && !player.hasTag("matrix:knockback") && !player.hasTag("matrix:slime") && !isOnGround && !player.isFlying && !player.isGliding && !player.isInWater && !(jumpEffect && jumpEffect.amplifier > 2) && !(threwTridentAt && now - threwTridentAt < 3000)) {
        if ((velocity > maxVelocity && velocity !== 1 && inAir(player.dimension, player.location)) || velocity > 3.5) {
            if (!config.slient) player.teleport(prevLoc)
            flag (player, "Fly", "A", config.antiFly.maxVL, config.antiFly.punishment, [lang(">velocityY") + ":" + + velocity.toFixed(2)])
        }
    }
}
async function antiNoFall (player: Player, now: number) {
    const { id, isFlying, isClimbing, isOnGround, isInWater, isGliding, threwTridentAt, lastExplosionTime } = player;
    const jumpEffect = player.getEffect(MinecraftEffectTypes.JumpBoost)
    const prevLoc = previousLocations.get(id);
    const { x, y, z } = player.getVelocity();
    const xz = Math.hypot(x, z)

    //stop false positive
    if (isOnGround || isFlying || isClimbing || isInWater || isGliding || player.hasTag("matrix:levitating") || (jumpEffect && jumpEffect.amplifier > 2) || (threwTridentAt && now - threwTridentAt < 3000) || (lastExplosionTime && now - lastExplosionTime < 5000)) {
        return;
    }

    //velocityY is 0 and velocityXZ is higher than 0.15, flag the player
    if (y === 0 && xz > 0){
        if (!config.slient) player.teleport(prevLoc);
        flag (player, "Fly", "B", config.antiFly.maxVL, config.antiFly.punishment, [lang(">velocityY") + ":" + + y.toFixed(2), lang(">velocityXZ") + ":" + + xz.toFixed(2)])
    }
}

system.runInterval(() => {
    const toggle: boolean = Boolean(world.getDynamicProperty("antiFly")) ?? config.antiFly.enabled;
    if (toggle !== true) return;

    const now = Date.now();
    const players = world.getPlayers({ excludeGameModes: [GameMode.spectator] })
    for (const player of players) {
        if (isAdmin(player)) continue;

        antiFly (player, now)
    }
}, 1);

system.runInterval(() => {
    const toggle: boolean = Boolean(world.getDynamicProperty("antiFly")) ?? config.antiFly.enabled;
    if (toggle !== true) return;

    const now = Date.now();
    for (const player of world.getPlayers({ excludeGameModes: [GameMode.spectator] })) {
        antiNoFall (player, now)
    }
}, 10)

function inAir (dimension: Dimension, location: Vector3) {
    location = { x: Math.floor(location.x), y: Math.floor(location.y), z: Math.floor(location.z)}
    const offset = [-1, 0, 1]
    const offsetY = [-1, 0, 1, 2]
    let allBlock = []

    return offset.some(x => offsetY.some(y => offset.some(z => allBlock.push(
        dimension.getBlock({
            x: location.x + x,
            y: location.y + y,
            z: location.z + z
        })?.isAir
    ))))
}

function findSlime (dimension: Dimension, location: Vector3) {
    const offset = [-1, 0, 1]
    const pos = {
        x: Math.floor(location.x),
        y: Math.floor(location.y) - 1,
        z: Math.floor(location.z)
    }

    return offset.some(x => offset.some(z => dimension.getBlock({
        x: pos.x + x,
        y: pos.y,
        z: pos.z + z
    })?.typeId === MinecraftBlockTypes.Slime))
}