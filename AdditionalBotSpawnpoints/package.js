class Mod
{
    constructor()
    {
		Logger.info("Loading: Additional Bot Spawnpoints");
		
		ModLoader.onLoad["AdditionalBotSpawnpoints"] = require("./src/AdditionalBotSpawnpoints.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();