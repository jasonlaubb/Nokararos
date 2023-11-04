//@ts-check
import * as Minecraft from "@minecraft/server"
import {
  world,
  Player
} from "@minecraft/server"
import {
  antiCrasherEnabled
} from "../../config"

/** @param {Player} player */
export async function antiCrasherB(player) {
  if (antiCrasherEnabled == true) {
    let playerY;
    let playerX;
    let playerZ;

    const crasherToggle = !world.getDynamicProperty('toggle:crasher')
    if (crasherToggle != true) return
    playerZ = player.location.z
    playerX = player.location.x
    playerY = player.location.y
    if (playerX < -30000000 || playerY < -30000000 || playerZ < -30000000) {
      if (player.hasTag("MatrixOP")) return
      player.addTag(`ban`)
      player.addTag(`By:Matrix`)
      player.addTag(`Reason:§cCrasher §8(§gB§8)`)
      player.runCommand(`scoreboard players set @s bantimer 40`)
      player.runCommand(`tp @s 100 100 100`)
      world.sendMessage(
        `§e[§cMatrix§e] §b${player.name} §chas been banned!§r\n§gBy§8:§bMatrix\n§gReason§8:§cCrasher §8(§gB§8)`)
      player.runCommand(
        `kick "${player.name}" .\n§8 >> §c§lYou are banned bad boy\n§r§8 >> §gReason§8:§cCrasher §8(§gB§8)\n§8 >> §gBy§8:§cMatrix`
        )
    }
  }
}
