import { world, system, Vector3, Player } from "@minecraft/server"
import { isAdmin, flag } from "../../Assets/Util"
import { MinecraftItemTypes } from "@minecraft/vanilla-data"
import lang from "../../Data/Languages/lang"

interface BlinkData {
    lastPos: Vector3
    lastSpeed: number
}

const blinkData = new Map<string, BlinkData>()

/**
 * @author jasonlaubb
 * @description A check prevent player from using blink hacks
 * @warning This check will cause un-sloveable false positive
 */

async function antiBlink (player: Player) {
    const data: BlinkData = blinkData.get(player.id)
    const { x, y, z } = player.getVelocity()
    const speed: number = Math.hypot(x, y, z)

    if (data === undefined) {
        blinkData.set(player.id, {
            lastPos: player.location,
            lastSpeed: speed
        } as BlinkData)
        return
    }

    const { lastPos, lastSpeed } = data
    blinkData.set(player.id, { lastPos: player.location, lastSpeed: speed } as BlinkData)

    const { x: x1, y: y1, z: z1 } = lastPos
    const { x: x2, y: y2, z: z2 } = player.location

    const distance: number = Math.hypot(x1 - x2, y1 - y2, z1 - z2)

    //check for interger location (teleport)
    if (x2 % 1 === 0 && x2 % 1 === 0 && x2 % 1 === 0 && speed == 0) return
    if (player.hasTag("matrix:useTP") && speed == 0) return

    if (distance > speed && lastSpeed === 0) {
        flag(player, "Blink", "A", 1, "kick", [lang(">distance") + ":" + distance.toFixed(2)])
        player.teleport(lastPos)
    }
}

system.runInterval(() => {
    const toggle: boolean = world.getDynamicProperty("antiBlink") as boolean ?? true
    if (toggle !== true) return

    const players = world.getAllPlayers()
    for (const player of players) {
        if (isAdmin(player)) continue

        antiBlink (player)
    }
}, 0)

world.afterEvents.itemUse.subscribe(({ source: player, itemStack: item }) => {
    if (item.typeId === MinecraftItemTypes.EnderPearl || item.typeId === MinecraftItemTypes.ChorusFruit) {
        player.addTag("useTP")
        system.runTimeout(() => {
            player.removeTag("matrix:useTP")
        }, 120)
    }
})