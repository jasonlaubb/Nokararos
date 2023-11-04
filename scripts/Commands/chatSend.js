//@ts-check
import {
  system,
  world
} from "@minecraft/server"

import { prefix, antiSpammerEnabled } from '../config'
import { Commands } from "./commands"
import { spammer } from "../Misc_checks/Spammer/Spammer"

world.beforeEvents.chatSend.subscribe(data => {
try {
  const player = data.sender
  const msg = data.message
  const spam = world.scoreboard.getObjective("spam").getScore(player.scoreboardIdentity)
  const chatRanksToggle = !world.getDynamicProperty('toggle:chatrank')

  if (msg.startsWith(prefix)) {
    Commands(player, msg)
    data.cancel = true
    return
  }

  if(player.hasTag("mute")) {
    data.cancel = true
    return system.run(() => player.sendMessage(`§e[§cMatrix§e]§c You're muted!`))
  }

  if (antiSpammerEnabled && !player.hasTag("MatrixOP")) {
    if (spammer(player) === true) {
      data.cancel = true
      return
    }
  }

  if(spam > 0) {
    data.cancel = true
    return system.run(() => player.sendMessage(`§e[§cMatrix§e]§c Please wait ${(spam / 20).toFixed(1)} seconds before you send message.`))
  }

  if(spam === 0 && !player.hasTag("MatrixOP")) {
    system.run(() => {
      world.scoreboard.getObjective('spam').setScore(player.scoreboardIdentity, 50)
    })
  }

  let rank = player.getTags().filter(f => f.startsWith('rank:')).join(' §r§8/§r§7 ').replaceAll('rank:','')
  if(rank.length <= 0) {
    rank = "§7Member"
  }
  data.cancel = true
  const MESSAGE = player.hasTag('MatrixOP') ? msg : msg.replace(/§./g, '')
  system.run(() => {
    if(chatRanksToggle == true) return 
    world.sendMessage(`§8[§7${rank}§r§8] §r§7${player.name}§7: §r${MESSAGE}`)
  })
} catch {
} finally {
  data.cancel = true
}
})
