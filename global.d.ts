import * as Server from "@minecraft/server";
import * as ServerUi from "@minecraft/server-ui";
import * as DebugUtilities from "@minecraft/debug-utilities";
import { Module } from "./Matrix_BP/src/matrixAPI";
import { PlayerTimeStamp } from "./Matrix_BP/src/program/system/playerProperty";
declare module "@minecraft/server" {
	interface Player {
		isAdmin: () => boolean;
		getPermissionLevel: () => number;
		setPermissionLevel: (level: number) => void;
		runChatCommand: (command: string) => void;
		flag: (detected: Module) => void;
		safeIsOp: () => boolean;
		timeStamp: PlayerTimeStamp;
		opCommandUsageTimestamp: number;
		opCommandIsVerifying: boolean;
	}
}
interface Console {
	log: (message: string) => void;
	warn: (message: string) => void;
	error: (message: Error) => void;
}
declare global {
	var console: Console;
}