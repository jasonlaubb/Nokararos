import * as log from "../../assets/logSystem";
import { Command } from "../../matrixAPI";
import { rawtextTranslate, fastText } from "../../util/rawtext";
import { day_ms, parseLogUserInterface, timeStringCorrectToDay } from "../../util/util";
import { ActionFormData } from "@minecraft/server-ui";
new Command()
	.setName("fastlog")
	.setAliases("flog", "getlogbytime")
	.setMinPermissionLevel(1)
	.setDescription(rawtextTranslate("command.fastlog.description"))
	.addOption(rawtextTranslate("command.log.day"), rawtextTranslate("command.log.day.description"), "choice", {
		arrayRange: [
			"today",
			"yesterday",
			"thedaybefore",
		],
	}, false)
	.onExecute(async (player, day) => {
		const selectedDay = day as "today" | "yesterday" | "thedaybefore";
		const dayT = timeStringCorrectToDay(Date.now());
		switch (selectedDay) {
			case "yesterday": {
				dayT.dayStart -= day_ms;
				dayT.dayEnd -= day_ms;
				break;
			}
			case "thedaybefore": {
				dayT.dayStart -= day_ms * 2;
				dayT.dayEnd -= day_ms * 2;
				break;
			}
		}
		const logs = log.getLog(dayT.dayStart, dayT.dayEnd);
		if (logs.length === 0) return player.sendMessage(fastText().addText("§bMatrix§a+ §7> ").addTran("command.log.nodata").build());
		parseLogUserInterface(logs, player);
	})
	.register();
new Command()
	.setName("log")
	.setMinPermissionLevel(1)
	.setAliases("openlog", "viewlog", "seelog", "getlog", "record")
	.setDescription(rawtextTranslate("command.log.description"))
	.addOption(rawtextTranslate("command.log.amount"), rawtextTranslate("command.log.amount.description"), "integer", {
		lowerLimit: 5,
		upperLimit: 500,
	}, true)
	.onExecute(async (player, amount) => {
		const showAmount = amount as number ?? 80;
		const logs = log.getAllLogs().slice(0, showAmount);
		if (logs.length === 0) return player.sendMessage(fastText().addText("§bMatrix§a+ §7> ").addTran("command.log.nodata").build());
		parseLogUserInterface(logs, player)
	})
	.register();
new Command()
	.setName("daylog")
	.setAliases("dlog", "getlogbydate")
	.setMinPermissionLevel(1)
	.setDescription(rawtextTranslate("command.daylog.description"))
	.addOption(rawtextTranslate("command.log.day"), rawtextTranslate("command.log.date"), "integer", {
		lowerLimit: 1,
		upperLimit: 31,
	})
	.addOption(rawtextTranslate("command.log.month"), rawtextTranslate("command.log.date"), "integer", {
		lowerLimit: 1,
		upperLimit: 12,
	})
	.addOption(rawtextTranslate("command.log.years"), rawtextTranslate("command.log.years"), "integer", {
		lowerLimit: 1970,
	}, true)
	.onExecute(async (player, day, month, years) => {
		// Target UTC time
		const targetTime = new Date(`${years ?? new Date(Date.now()).getFullYear()}-${month}-${day}T00:00:00.000`).getTime() + new Date().getTimezoneOffset();
		if (targetTime > Date.now()) return player.sendMessage(fastText().addText("§bMatrix§a+ §7> ").addTran("command.log.invalid").build());
		const dayEnd = targetTime + 1439999;
		const dayLogs = log.getLog(targetTime, dayEnd);
		if (dayLogs.length === 0) return player.sendMessage(fastText().addText("§bMatrix§a+ §7> ").addTran("command.log.nodata").build());
		parseLogUserInterface(dayLogs, player);
	})
	.register();
new Command()
	.setName("logui")
	.setAliases("logrecord", "getlogbyrestart")
	.setMinPermissionLevel(1)
	.setDescription(rawtextTranslate("command.logui.description"))
	.onExecute(async (player) => {
		const ui = new ActionFormData();
		const restartLog = log.getRestartLogs();
		// Unfinished
	})