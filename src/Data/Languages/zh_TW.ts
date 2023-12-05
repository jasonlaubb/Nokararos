export default {
    "-help.helpCDlist": "幫助指令清單：",
    "-help.help": "help - 顯示此說明訊息",
    "-help.toggles": "toggles - 顯示所有模組的切換",
    "-help.toggle": "toggle <模組> enable/disable - 切換模組",
    "-help.op": "op <玩家> - 授予玩家管理員權限",
    "-help.deop": "deop <玩家> - 刪除玩家的管理者權限",
    "-help.passwords": "passwords <oldPassword> <newPassword> - 更改密碼",
    "-help.flagmode": "flagmode all/tag/bypass/admin - 更改警示模式",
    "-help.rank": "rank set/add/remove <player> <rank> - 更改玩家的聊天稱號",
    "-help.rankclear": "rankclear <玩家> - 清除玩家的所有聊天稱號",
    "-help.defaultrank": "defaultrank <rank> - 更改預設聊天稱號",
    "-help.showallrank": "showallrank true/false - 在聊天中顯示所有聊天稱號",
    "-help.ban": "ban <玩家> <原因> <timeRegax/\"forever\"> - 停權玩家",
    "-help.unban": "unban <玩家> - 解除停權玩家",
    "-help.unbanremove": "unbanremove <玩家> - 從解禁佇列中刪除玩家",
    "-help.unbanlist": "unbanlist - 顯示解禁佇列中的所有玩家",
    "-help.freeze": "freeze <玩家> - 凍結玩家",
    "-help.unfreeze": "unfreeze <玩家> - 解凍玩家",
    "-help.vanish": "vanish - 隱藏自己",
    "-help.unvanish": "unvanish - 解除隱藏狀態",
    "-help.invcopy": "invcopy <玩家> - 將玩家背包狀態複製到自己的背包",
    "-help.invsee": "invsee <玩家> - 查看玩家的背包內容物",
    "-help.echestwipe": "echestwipe <玩家> - 清除玩家終界箱內全部物品",
    "-help.lockdowncode": "lockdowncode <get/set/random> <set: code>/[random: length] - 對世界鎖定碼作出行動",
    "-help.lockdown": "lockdown <code> - 使用鎖定碼鎖定伺服器",
    "-help.unlock": "unlock <code> - 解鎖伺服器",
    "-help.adminchat": "adminchat - 在管理員頻道與公用頻道之間切換",
    "-help.lang": "lang <language> - 更改語言",
    "-help.langlist": "langlist - 顯示所有語言",

    "-about.line1": "Matrix 是一款基於 @minecraft API 的 Minecraft Bedrock 防外掛",
    "-about.version": "版本",
    "-about.author": "作者",

    "-toggles.toggle": "切換",
    "-toggles.module": "模組",
    "-toggles.toggleList": "切換清單：",
    "-toggles.unknownModule": "未知模組，嘗試 %atoggles",
    "-toggles.toggleChange": "%a 模組已 %bd",
    "-toggles.unknownAction": "未知操作，請僅使用 enable/disable",

    "-op.hasbeen": "%a 已被 %b 給予管理員權限",
    "-op.please": "請輸入密碼",
    "-op.now": "您現在是管理員",
    "-op.wrong": "密碼錯誤!",
    "-op.wait": "請你在 %a 秒後再次嘗試",

    "-deop.lockdown": "伺服器處於鎖定模式",
    "-deop.notadmin": "%a 不是管理者",
    "-deop.hasbeen": "%a 已被 %b 刪除",

    "-passwords.oldnew": "請輸入舊密碼和新密碼",
    "-passwords.wrong": "密碼錯誤",
    "-passwords.changed": "密碼已更改",

    "-flagmode.unknown": "未知操作，請僅使用 all/bypass/admin/tag/none",
    "-flagmode.changed": "警示模式已變更為 %a",

    "-rank.unknownAction": "未知操作，請僅使用 set/add/remove",
    "-rank.enter": "請輸入聊天稱號",
    "-rank.hasset": "%a 的聊天稱號已設定為 %b",
    "-rank.hasadd": "%a 的聊天稱號已新增 %b",
    "-rank.already": "%a 已經有 %b §r§crank",
    "-rank.hasremove": "%a 的聊天稱號已刪除",
    "-rank.norank": "%a 沒有 %b §r§c 聊天稱號",
    "-rank.empty": "%a 沒有任何聊天稱號",

    "-rankclear.has": "%a的聊天稱號已被清除",
    "-rankclear.empty": "%a 沒有任何聊天稱號",

    "-defaultrank.enter": "請輸入聊天稱號",
    "-defaultrank.has": "預設聊天稱號已設定為 %a",

    "-showallrank.unknown": "未知操作，請只使用 true/false",
    "-showallrank.has": "顯示所有聊天稱號已設定為 %a",

    "-ban.self": "你不能停權自己",
    "-ban.admin": "你不能停權管理者",
    "-ban.reason": "請輸入原因",
    "-ban.time": "請輸入時間, 例如: 1d20h30m40s",
    "-ban.has": "%a 已被 %b 停權",

    "-unban.self": "你無法解禁自己",
    "-unban.notban": "%a 未被停權",

    "-unbanremove.not": "%a 不在解禁隊列",

    "-unbanlist.none": "解封隊列中沒有玩家",
    "-unbanlist.list": "解禁隊列",

    "-freeze.self": "你不能凍結自己",
    "-freeze.admin": "你不能凍結管理員",
    "-freeze.has": "%a 已被 %b 凍結",
    "-freeze.already": "%a 已經凍結",

    "-unfreeze.self": "你無法解凍自己",
    "-unfreeze.not": "%a 沒有凍結",
    "-unfreeze.has": "%a 已被 %b 解凍",
    "-unfreeze.admin": "您無法解凍管理員",

    "-mute.self": "你不能讓自己靜音",
    "-mute.admin": "您無法將管理員靜音",
    "-mute.has": "%a 已被 %b 靜音",
    "-mute.already": "%a 已經靜音",

    "-unmute.self": "你無法將自己取消靜音",
    "-unmute.not": "%a 未靜音",
    "-unmute.has": "%a 已被 %b 取消靜音",
    "-unmute.admin": "您無法取消管理員靜音",

    "-vanish.has": "你現在消失了",
    "-vanish.out": "你現在不再消失了",

    "-invcopy.self": "你不能複製自己的背包",
    "-invcopy.not": "從 %a 複製背包",

    "-invsee.self": "你無法查看自己的背包",
    "-invsee.of": "%a 的背包",

    "-echestwipe.self": "你無法擦拭自己的終界箱",
    "-echestwipe.admin": "你無法清除管理員的終界箱",
    "-echestwipe.has": "%a 的終界箱已被 %b 擦拭",

    "-lockdowncode.unknown": "請輸入您想要的動作",
    "-lockdowncode.get": "鎖定鎖定碼：%a",
    "-lockdowncode.enter": "請輸入密碼",
    "-lockdowncode.set": "成功將鎖定鎖定碼變更為 %a",
    "-lockdowncode.number": "鎖定碼長度應該是數字",
    "-lockdowncode.length": "請輸入1到128之間的密碼長度",
    "-lockdowncode.random": "成功隨機鎖定鎖定碼 - %a",
    "-lockdowncode.unknownAction": "未知操作，請只使用 get/set/random",

    "-lockdown.enter": "請輸入密碼",
    "-lockdown.wrong": "鎖定碼錯誤",
    "-lockdown.already": "伺服器已被 %a 轉為鎖定模式",
    "-lockdown.has": "伺服器現在處於鎖定模式",

    "-unlock.not": "鎖定尚未啟用",
    "-unlock.has": "%a 已停用鎖定",

    "-adminchat.has": "您現在處於管理頻道",
    "-adminchat.out": "您現在處於公共頻道",

    "-lang.enter": "請輸入語言",
    "-lang.unknown": "未知語言，嘗試 %alanglist",
    "-lang.has": "語言已更改為 %a",

    "-langlist.list": "語言列表：",

    ".CommandSystem.no_permission": "你沒有權限使用該指令",
    ".CommandSystem.unknown_command": "未知指令。請輸入 \"help\" 取得協助。",
    ".CommandSystem.command_disabled": "該指令已停用",
    ".CommandSystem.command_disabled_reason": "您不是管理員，無法使用此指令",
    ".CommandSystem.no_player": "請指定玩家",
    ".CommandSystem.unknown_player": "未知玩家",
    ".CommandSystem.unknown": "未知指令，請嘗試 %ahelp",
    ".CommandSystem.about": "使用 -about 查看更多資訊",

    ".Util.kicked": "你已被踢了",
    ".Util.reason": "原因",
    ".Util.noreason": "未提供原因",
    ".Util.unknown": "未知",
    ".Util.has_failed": "已被攔截",
    ".Util.formkick": "%a 已被自動踢出",
    ".Util.formban": "%a 已被自動封禁",

    ".banHandler.banned": "你已被停權！",
    ".banHandler.format": "§c§l您已被停權! \n§r§7剩餘時間: §c %a\n§7理由: §c%b§r\n§7由: §c %c",

    ".AdminChat.adminchat": "管理聊天",

    ".ChatHandler.muted": "你已靜音！",

    ".dimensionLock.stop": "你不可以去其他維度！",

    ".Spam.slowdown": "請慢慢發送訊息",
    ".Spam.repeated": "您不能再發送相同的訊息",
    ".Spam.kicked": "§c%a§g 因發送垃圾郵件而被踢出",
    ".Spam.filter": "您的郵件包含已過濾的單字",
    ".Spam.long": "您的訊息太長",
    ".Spam.blacklist": "列入黑名單的信息，警告",
    ".Spam.kickedBlacklist": "§c%a§g 因說出黑名單訊息而被踢出",

    ">distance": "距離",
    ">yReach": "y軸距離",
    ">HitLength": "攻擊長度",
    ">Angle": "角度",
    ">Click Per Second": "每秒點擊",
    ">RotSpeed": "旋轉速度",
    ">RotSpeedX": "x軸旋轉速度",
    ">RotSpeedY": "y軸旋轉速度",
    ">Type": "類型",
    ">Pos": "座標",
    ">PosDeff": "座標差",
    ">AttackTime": "攻擊時間",
    ">UsingItem": "使用物品",
    ">Moving": "移動",
    ">Container": "使用容器",
    ">velocityY": "y軸速度",
    ">velocityXZ": "xz軸速度",
    ">playerSpeed": "速度",
    ">Mph": "米每小時",
    ">Reach": "距離",
    ">Mode": "模式",
    ">Break": "破壞",
    ">Place": "放置",
    ">GameMode": "遊戲模式",
    ">illegalLength": "違規長度",
    ">illegalRegax": "違規字元",
    ">Length": "長度",
    ">Block": "方塊",
    ">RotationX": "x軸迴轉",
    ">RotationY": "y軸迴轉",
    ">relative": "相對值",
    ">Delay": "間隔",
    ">typeId": "類型名稱",
    ">nameLength": "名字長度",
    ">CentreDis": "中心距離",
    ">ItemType": "物品類型",
    ">ItemTag": "物品標籤",
    ">ItemNameLength": "物品名稱長度",
    ">ItemLore": "物品註釋",
    ">EnchantLevel": "附魔等級",
    ">EnchantConflict": "附魔衝突",
    ">ItemEnchantAble": "附魔應用",
    ">ItemEnchantRepeat": "附魔重疊",
    ">ItemAmount": "物品數量",
    ">Amount": "數量",
    ">Ratio": "比率",
    ">Limit": "上限"
}