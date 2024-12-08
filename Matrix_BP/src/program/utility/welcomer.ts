import { PlatformType, PlayerSpawnAfterEvent, world } from "@minecraft/server";
import { Module } from "../../matrixAPI";
import { fastText, rawtextTranslate } from "../../util/rawtext";

new Module()
    .addCategory("utility")
    .setName(rawtextTranslate("module.welcomer.name"))
    .setDescription(rawtextTranslate("module.welcomer.description"))
    .setToggleId("welcomer")
    .onModuleEnable(() => {
        world.afterEvents.playerSpawn.subscribe(onPlayerSpawn);
    })
    .onModuleDisable(() => {
        world.afterEvents.playerSpawn.unsubscribe(onPlayerSpawn);
    })
    .register();

function onPlayerSpawn({ player, initialSpawn }: PlayerSpawnAfterEvent) {
    if (!initialSpawn) return;
    world.sendMessage(fastText().addText("§bMatrix§a+ §7> §g").addTran("module.welcomer.message", player.name).endline().addTranRawText("module.welcomer.device", rawtextTranslate(parseDeviceType(player.clientSystemInfo.platformType))).build());
}
function parseDeviceType(deviceType: PlatformType): string {
    switch (deviceType) {
        case PlatformType.Console:
            return "module.welcomer.device.console";
        case PlatformType.Desktop:
            return "module.welcomer.device.pc";
        case PlatformType.Mobile:
            return "module.welcomer.device.mobile";
        default:
            return "module.welcomer.device.unknown";
    }
}
