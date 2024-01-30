/** @author amiconabbo */
export default {
    "-help.helpCDlist": "Lista dei comandi:",
    "-help.help": "help - Mostra questo messaggio",
    "-help.toggles": "toggles - Mostra tutti i moduli",
    "-help.toggle": "toggle <modulo> <attivo/disattivo> - Toggle un modulo",
    "-help.op": "op <giocatore> - Dare a un giocatore i permessi da admin",
    "-help.deop": "deop <giocatore> - Rimuovere a un giocatore i permessi da admin",
    "-help.passwords": "passwords <vecchiaPassword> <nuovaPassword> - Cambia la password",
    "-help.flagmode": "flagmode <tutti/tag/bypass/admin> - Cambia la flag mode",
    "-help.rank": "rank <set/aggiungi/rimuovi> <giocatore> <rank> - Cambia il rank a un giocatore",
    "-help.rankclear": "rankclear <giocatore> - Toglie tutti i rank a un giocatore",
    "-help.defaultrank": "defaultrank <rank> - Cambia il rank predefinito",
    "-help.showallrank": "showallrank <vero/falso> - Mostra tutti i rank in chat",
    "-help.ban": "ban <giocatore> <ragione> <tempoDefinito/perSempre> - Banna un giocatore",
    "-help.unban": "unban <giocatore> - Sbanna un giocatore",
    "-help.unbanremove": "unbanremove <giocatore> - Rimuove un giocatore dalla coda di sban",
    "-help.unbanlist": "unbanlist - Ti fa vedere la lista dei giocatori in coda per lo sban",
    "-help.freeze": "freeze <giocatore> - Congela un player",
    "-help.unfreeze": "unfreeze <giocatore> - Scongela un player",
    "-help.vanish": "vanish - Ti rende invisibile agli altri",
    "-help.unvanish": "unvanish - Ti rende visibile agli altri",
    "-help.invcopy": "invcopy <giocatore> - Copia l'inventario di un giocatore nel tuo",
    "-help.invsee": "invsee <giocatore> - Ti fa vedere l'inventario di un giocatore",
    "-help.echestwipe": "echestwipe <giocatore> - Pulisce l'enderchest di un giocatore",
    "-help.lockdowncode": "lockdowncode <ottieni/setta/casuale> <setta: codice>/[casuale: lunghezza] - Crea un codice di blocco",
    "-help.lockdown": "lockdown <codice> - Blocca il server con il codice",
    "-help.unlock": "unlock <codice> - Sblocca il server con il codice",
    "-help.adminchat": "adminchat - Entra ed esci dalla chat admin",
    "-help.lang": "lang <lingua> - Cambia la lingua",
    "-help.langlist": "langlist - Vedi la lista delle lingue",

    "-about.line1": "Il Matrix è u anticheat per minecraft bedrock basatu su @minecraft API",
    "-about.version": "Versione",
    "-about.author": "Autore",

    "-toggles.toggle": "Toggle",
    "-toggles.module": "modulo",
    "-toggles.toggleList": "Toggle list:",
    "-toggles.unknownModule": "Modulo sconosciuto, prova %atoggles",
    "-toggles.toggleChange": "%a Modulo è stato %bd",
    "-toggles.unknownAction": "Azione sconosciuta, perfavore usa solo abilita/disabilita",
    "-toggles.already": "Questo modulo è %ad già",

    "-op.hasbeen": "%a è stato oppatto correttamente da %b",
    "-op.please": "Perfsvore inserisci la password",
    "-op.now": "Ora sei un admin",
    "-op.wrong": "Password errata",
    "-op.wait": "Perfavore aspetta %a altri secondi prima di riprovare",

    "-deop.lockdown": "Il server è in modalità di blocco",
    "-deop.notadmin": "%a non è un admin",
    "-deop.hasbeen": "%a è stato deoppato correttamente da %b",

    "-passwords.oldnew": "Perfavore inserisci la vecchia e la nuova password",
    "-passwords.wrong": "Password errata",
    "-passwords.changed": "La password è stata cambiata con successo",

    "-flagmode.unknown": "Azione sconosciuta, peravore usa solo tutti/bypass/admin/tag/nessuno",
    "-flagmode.changed": "Flag mode è stata cambiata con successo a %a",

    "-rank.unknownAction": "Azione sconosciuta, perfavore usa solo setta/aggiungi/rimuovi",
    "-rank.enter": "Perfavore metti il rank",
    "-rank.hasset": "%a's rank è stato settatto con successo a %b",
    "-rank.hasadd": "%a's rank è stato aggiunto con successo %b",
    "-rank.already": "%a ha già %b §r§crank",
    "-rank.hasremove": "%a's rank è stato rimosso con successo",
    "-rank.norank": "%a non ha %b §r§c rank",
    "-rank.empty": "%a non ha nessun rank",

    "-rankclear.has": "%a's rank sono stati cancellati con successo",
    "-rankclear.empty": "%a non ha nessun rank",

    "-defaultrank.enter": "Perfavore inserisci il rank",
    "-defaultrank.has": "Il rank predefinito è stato settato con successo a %a",

    "-showallrank.unknown": "Azione sconosciuta, perfavore usa solo vero/falso",
    "-showallrank.has": "Mostra tutti i rank è stato settato con successo a %a",

    "-ban.self": "Non puoi bannarti da solo",
    "-ban.admin": "Non puoi bannare un admin",
    "-ban.reason": "Perfavore metti una motivazione",
    "-ban.time": "Perfavore metti una durata, esempio: 1d20h30m40s",
    "-ban.has": "%a è stato bannato con successo da %b",

    "-unban.self": "Non puoi sbannarti da solo",
    "-unban.notban": "%a non è bannato",
    "-unban.add": "%a è entrato nella coda di sban con successo",

    "-unbanremove.not": "%a non è nella coda di sban",
    "-unbanremove.yes": "%a è stato rimosso dalla coda di sban",

    "-unbanlist.none": "Non c'è nessun giocatore nella coda di sban",
    "-unbanlist.list": "Lista di sban",

    "-freeze.self": "Non puoi congelarti da solo",
    "-freeze.admin": "Non puoi congelare un admin",
    "-freeze.has": "%a è stato congelato con successo da %b",
    "-freeze.already": "%a è già congelato",

    "-unfreeze.self": "Non puoi scongelarti da solo",
    "-unfreeze.not": "%a non è congelato",
    "-unfreeze.has": "%a è stato scongelato con successo da %b",
    "-unfreeze.admin": "Non puoi scongelare un admin",

    "-mute.self": "Non puoi mutarti da solo",
    "-mute.admin": "Non puoi mutare un admin",
    "-mute.has": "%a è stato mutato con successo da %b",
    "-mute.already": "%a è già mutato",

    "-vanish.has": "Sei invisibile agli altri",  
    "-vanish.out": "Non sei più invisibile agli altri",

    "-invcopy.self": "Non puoi copiare il tuo stesso inventario",
    "-invcopy.not": "è stato copiato l'inventario da %a",

    "-invsee.self": "Non puoi vedere il tuo stesso inventario",
    "-invsee.of": "Inventario di %a",

    "-echestwipe.self": "Non puoi cancellarti l'endecìrchest",
    "-echestwipe.admin": "Non puoi cancellare l'endecìrchest di un admin",
    "-echestwipe.has": "L'enderchest di %a è stato cancellato con successo da %b",

    "-lockdowncode.unknown": "Perfavore inserisci l'azione che desideri fare",
    "-lockdowncode.get": "Codice di blocco: %a",
    "-lockdowncode.enter": "Perfavore inserisci il codice",
    "-lockdowncode.set": "Il codice di blocco è stato cambiato con successo a %a",
    "-lockdowncode.number": "La lunghezza del codice deve essere un numero",
    "-lockdowncode.length": "Perfavore inserisci la lunghezza del codice da 1 a 128",
    "-lockdowncode.random": "Un codice di blocco casuale è stato messo con successo - %a",
    "-lockdowncode.unknownAction": "Azione sconosciuta, perfavore usa solo ottieni/setta/casuale",

    "-lockdown.enter": "Perfavore inserisci il codice",
    "-lockdown.wrong": "Codice errato",
    "-lockdown.already": "Il server è stato bloccato con successo da %a",
    "-lockdown.has": "Il server adesso è nella modalità blocco",

    "-unlock.not": "Il blocco non è abilitato",
    "-unlock.has": "Il server è stato sbloccato con successo da %a",

    "-adminchat.has": "Adesso sei nella chat admin",
    "-adminchat.out": "Adesso sei nella chat pubblica",

    "-lang.enter": "Perfavore inserisci il linguaggio",
    "-lang.unknown": "Linguaggio sconosciuto, prova %alanglist",
    "-lang.has": "Il linguaggio è stato cambiato con successo a %a",

    "-langlist.list": "Lista dei linhguaggi:",

    ".CommandSystem.no_permission": "Non hai il permesso di usare questo comando",
    ".CommandSystem.unknown_command": "Comando sconosciuto. Scrivi \"help\" per aiuto.",
    ".CommandSystem.command_disabled": "Questo comando è disabilitato",
    ".CommandSystem.command_disabled_reason": "Non sei un admin per usare questo comando",
    ".CommandSystem.no_permisson": "Non hai i permessi per eseguire questo comando",
    ".CommandSystem.no_player": "Perfavore specifica il giocatore",
    ".CommandSystem.unknown_player": "Giocatore sconosciuto",
    ".CommandSystem.unknown": "Comando sconosciuto, prova %ahelp",
    ".CommandSystem.about": "Usa -about per vedere altre informazioni",

    ".Util.kicked": "Sei stato espulso con successo",
    ".Util.reason": "Ragione",
    ".Util.noreason": "Nessuna ragione specificata",
    ".Util.unknown": "Sconosciuto",
    ".Util.has_failed": "è fallito",
    ".Util.formkick": "%a è stato espulso dal gioco automaticamente",
    ".Util.formban": "%a è stato bannato dal gioco automaticamente",

    ".banHandler.banned": "Sei stato bannato con successo!",
    ".banHandler.format": "§c§lSei stato bannato con successo!\n§r§7Tempo rimanente:§c %a\n§7Ragione: §c%b§r\n§7Da: §c%c",

    ".AdminChat.adminchat": "adminchat",

    ".ChatHandler.muted": "Sei stato mutato!",

    ".dimensionLock.stop": "Non ti è permesso andare in altre dimensioni!",

    ".Spam.slowdown": "Perfavore invia i messaggi lentamente",
    ".Spam.repeated": "Non è possibile inviare di nuovo lo stesso messaggio",
    ".Spam.kicked": "§c%a§g è stato kikkato con successo per spam",
    ".Spam.filter": "Il tuo messaggio contiene una parola filtrata",
    ".Spam.long": "Il tuo messaggio è troppo lungo",
    ".Spam.blacklist": "Avviso, il messaggio è nella lista nera",
    ".Spam.kickedBlacklist": "§c%a§g è stato kikkato con successo perchè ha inviato un messaggio presente nella lista nera",

    ">distance": "Distance",
    ">yReach": "yReach",
    ">HitLength": "HitLength",
    ">Angle": "Angle",
    ">Click Per Second": "Click Per Second",
    ">RotSpeed": "RotSpeed",
    ">RotSpeedX": "RotSpeedX",
    ">RotSpeedY": "RotSpeedY",
    ">Type": "Type",
    ">Pos": "Pos",
    ">PosDeff": "PosDeff",
    ">AttackTime": "AttackTime",
    ">UsingItem": "UsingItem",
    ">Moving": "Moving",
    ">Container": "Container",
    ">velocityY": "velocityY",
    ">velocityXZ": "velocityXZ",
    ">playerSpeed": "playerSpeed",
    ">Mph": "Mph",
    ">Reach": "Reach",
    ">Mode": "Mode",
    ">Break": "Break",
    ">Place": "Place",
    ">GameMode": "GameMode",
    ">illegalLength": "illegalLength",
    ">illegalRegax": "illegalRegax",
    ">Length": "Length",
    ">Block": "Block",
    ">RotationX": "RotationX",
    ">RotationY": "RotationY",
    ">relative": "relative",
    ">Delay": "Delay",
    ">typeId": "typeId",
    ">nameLength": "nameLength",
    ">CentreDis": "CentreDis",
    ">ItemType": "ItemType",
    ">ItemNameLength": "ItemNameLength",
    ">ItemLore": "ItemLore",
    ">EnchantLevel": "EnchantLevel",
    ">EnchantConflict": "EnchantConflict",
    ">ItemEnchantAble": "ItemEnchantAble",
    ">ItemEnchantRepeat": "ItemEnchantRepeat",
    ">ItemAmount": "ItemAmount",
    ">ItemTag": "ItemTag",
    ">Amount": "Amount",
    ">Ratio": "Ratio",
    ">Limit": "Limit",
    ">BlockPerSecond": "BPS",
    // Version 3.0.0 or upper version
    ".Util.unfair": "Unfair advantage of %a",
    ".Util.by": "(Immediate behavioral defense)",
    ".Util.operator": "By",
    ".Bot.by": "(Bot defensive action)",
    ".Spam.by": "(Anti spam automatic action)",
    ".Spam.spamming": "Spamming chat",
    ".Spam.blacklisted": "Blacklisted message",
    ".Bot.waitUI": "For security reason, you cannot chat untill you finished verify process. Please wait until the verify ui be shown",
    ".Bot.expired": "Expired verification",
    ".Bot.ui": "§a[This server is protected by Matrix AntiCheat]\n§gYou need to verify if you're not a bot §7(%a/%b)§g\nYou have §e%c§gseconds left\nEnter the code §e§l%d§r§g below",
    ".Bot.title": "Anti Bot Verification",
    ".Bot.failed": "Verification failed",
    ".Bot.ok": "You have been verified successfully",
    ".Border.reached": "You cannot access that location, you have reached the world border.",
    ".Border.outside": "You cannot access a location which is outside the world border.",
    ".Border.interact": "You cannot interact with a block or entity which is outside the world border.",
    "-borderSize.enter": "Please enter a border size.",
    "-borderSize.notANum": "Not a number!",
    "-borderSize.between": "Border size should between 100 to 1M!",
    "-borderSize.ok": "Sucessfully changed world border size to %a",
    "-help.borderSize": "borderSize <size/default> - Change the world border size",
    ".UI.exit": "Exit",
    ".UI.i": "Admin GUI",
    ".UI.i.a": "Moderate Players",
    ".UI.i.b": "Settings",
}
