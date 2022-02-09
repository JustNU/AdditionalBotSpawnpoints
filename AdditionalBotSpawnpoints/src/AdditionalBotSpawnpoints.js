"use strict";

class AdditionalBotSpawnpoints
{
	
	static onLoadMod() 
	{
		
		// DEBUG OPTIONS, DO NOT TOUCH
		let debugMap = false;
		let debugBot = false;
		let debugWave = false;
		
		for (const map in DatabaseServer.tables.locations) {
				
			// if map is illegible - skip
			if (map === "develop" || map === "hideout" || map === "lighthouse" || map === "privatearea" || map === "suburbs" || map === "tarkovstreets" || map === "terminal" || map === "town" || map === "base" || map === "bigmap" 
			|| map === "interchange" || map === "laboratory" || map === "shoreline") {continue;} 
			
			if (debugMap) {
				// create empty array for bot spawnpoints
				let newSpawnPointsParams = []
				
				// delete vanilla bot spawns
				Logger.log(map)
			
				for (const spawnPoint in DatabaseServer.tables.locations[map].base.SpawnPointParams) {
					if (DatabaseServer.tables.locations[map].base.SpawnPointParams[spawnPoint].Categories[0] === "Player") {
						newSpawnPointsParams.push(DatabaseServer.tables.locations[map].base.SpawnPointParams[spawnPoint]);
					}
				}
				DatabaseServer.tables.locations[map].base.SpawnPointParams = newSpawnPointsParams;
			}
			
			//"woods": "ZoneRedHouse,ZoneWoodCutter,ZoneHouse,ZoneRoad,ZoneMiniHouse,ZoneScavBase2,ZoneBrokenVill,ZoneClearVill"
			//"rezervbase": "ZonePTOR1,ZonePTOR2,ZoneBarrack,ZoneBunkerStorage,ZoneSubStorage,ZoneSubCommand",
			
			if (debugWave) {
				Logger.log(map)
			
				for (const wave in DatabaseServer.tables.locations[map].base.waves) {
					DatabaseServer.tables.locations[map].base.waves[wave].SpawnPoints = "ZonePTOR1";
				}
				
				for (const bossWave in DatabaseServer.tables.locations[map].base.BossLocationSpawn) {
					DatabaseServer.tables.locations[map].base.BossLocationSpawn[bossWave].BossZone = "ZoneRailStrorage";
					DatabaseServer.tables.locations[map].base.BossLocationSpawn[bossWave].BossChance = 0;
				}
				
				for (let i = 0; i < 20; i++)
				{
					let output = {
						"BossName": "pmcBot",
						"BossChance": 0,
						"BossZone": "ZoneRailStrorage",
						"BossPlayer": false,
						"BossDifficult": "normal",
						"BossEscortType": "followerGluharAssault",
						"BossEscortDifficult": "normal",
						"BossEscortAmount": "0",
						"Time": -1
					};
					
					DatabaseServer.tables.locations[map].base.BossLocationSpawn.push(output);
				}
				
				Logger.log(DatabaseServer.tables.locations[map].base.BossLocationSpawn)
			}
		}
		
		if (debugBot) {
			// strip weapons from bots (disables their ai)
			for (const botType in DatabaseServer.tables.bots.types) {
				const Bots = DatabaseServer.tables.bots.types;
				
				// empty inventory slots
				Bots[botType].inventory.equipment.FirstPrimaryWeapon = [];
				Bots[botType].inventory.equipment.SecondPrimaryWeapon = [];
				Bots[botType].inventory.equipment.Holster = [];
				Bots[botType].inventory.equipment.Scabbard = [];
			}
		}
		
		//							  ("Spawn Point Name",				X, Y, Z,			"Location",		"Bot Zone")
		// factory day
		JustNUCore.createBotSpawnPoint("Basement_1", 					-42.5,  0.0,  35.3, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_2", 					  0.9, -1.1,   8.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_3", 					 -6.7, -1.1,  24.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_4", 					-12.9, -2.4, -26.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_5", 					 22.7, -1.2,  -1.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_6", 					 38.7, -1.2, -31.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_7", 					 66.0, -1.2, -31.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("ScavBunkerDoor", 				-17.6, -1.2,  39.9, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Cellars", 						 63.8, -1.2, -28.8, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate0_1", 						-46.3,  2.7,  56.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate0_2", 						-59.9,  2.8,  55.9, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate0_1", 					-43.8,  2.5,  47.8, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate0_2", 					-45.4,  2.8,  62.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate1", 						-26.5,  1.7,   7.4, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("MedGate_1", 					-15.7,  1.7, -48.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("MedGate_2", 					-17.3,  1.7, -54.6, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_1", 						 44.9,  1.5, -40.3, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_2", 						 45.2,  1.5, -50.6, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_3", 						 71.2,  1.6, -56.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate2_1", 					 38.3,  1.8, -34.6, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_1", 						 56.6,  1.7,  56.7, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_2", 						 57.7,  1.7,  51.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_3", 						 66.0,  1.5,  41.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloor_1", 				 -9.2,  1.5,  36.9, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloor_2", 				-11.9,  5.2,  36.7, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloorHouse", 				 31.5,  1.7,  19.8, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("WaterHouse", 					 40.7,  1.6,  -9.5, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("WaterHouseRoof", 				 40.8,  4.6,  -7.5, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_1", 					  6.1,  8.9,  33.9, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_2", 					  6.2,  9.0,  59.4, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_3", 					-23.5,  9.9,  56.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_4", 					-39.3,  9.0,  56.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_5", 					  2.7,  9.9, -10.5, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_6", 					 -4.8,  9.9, -28.0,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_7", 					 -9.7,  9.9,  25.2,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_8", 					 20.9,  9.8,  15.9,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_9", 					-21.3,  9.0,   8.5,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_10", 				-21.5,  9.0, -10.4,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_11", 				 34.6,  5.7, -11.2,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_12", 				 44.4,  9.9,  16.1, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_13", 				 45.1,  9.0, -28.2,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("RepairQuest_1", 				 60.5,  1.5, -48.5,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("RepairQuest_2", 				 69.0,  1.6,  -7.8, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseFirstFloor", 	 10.1,  2.5,  38.3,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_1", 					 14.3,  2.5,  42.4, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_2", 					 21.7,  2.5,  42.0,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_3", 					 29.5,  2.5,  43.7,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseSecondFloor", 	  9.1,  6.0,  36.3, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_1", 					 12.4,  6.0,  47.5,	"factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_2", 					 20.5,  6.0,  44.3, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_3", 					 21.7,  6.0,  35.2, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_4", 					 32.0,  6.0,  47.9, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseThirdFloor", 	  9.2,  9.7,  36.3, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("MainOffice_1", 					 12.4,  9.7,  39.0, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("MainOffice_2", 					 20.2,  9.7,  38.5, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeRoom1", 					 23.6,  9.7,  37.5, "factory4_day", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeRoom2", 					 30.9,  9.7,  39.2, "factory4_day", "BotZone");
		
		// factory night
		JustNUCore.createBotSpawnPoint("Basement_1", 					-42.5,  0.0,  35.3, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_2", 					  0.9, -1.1,   8.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_3", 					 -6.7, -1.1,  24.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_4", 					-12.9, -2.4, -26.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_5", 					 22.7, -1.2,  -1.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_6", 					 38.7, -1.2, -31.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Basement_7", 					 66.0, -1.2, -31.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("ScavBunkerDoor", 				-17.6, -1.2,  39.9, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Cellars", 						 63.8, -1.2, -28.8, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate0_1", 						-46.3,  2.7,  56.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate0_2", 						-59.9,  2.8,  55.9, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate0_1", 					-43.8,  2.5,  47.8, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate0_2", 					-45.4,  2.8,  62.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate1", 						-26.5,  1.7,   7.4, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("MedGate_1", 					-15.7,  1.7, -48.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("MedGate_2", 					-17.3,  1.7, -54.6, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_1", 						 44.9,  1.5, -40.3, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_2", 						 45.2,  1.5, -50.6, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate2_3", 						 71.2,  1.6, -56.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("NearGate2_1", 					 38.3,  1.8, -34.6, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_1", 						 56.6,  1.7,  56.7, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_2", 						 57.7,  1.7,  51.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Gate3_3", 						 66.0,  1.5,  41.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloor_1", 				 -9.2,  1.5,  36.9, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloor_2", 				-11.9,  5.2,  36.7, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("GroundFloorHouse", 				 31.5,  1.7,  19.8, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("WaterHouse", 					 40.7,  1.6,  -9.5, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("WaterHouseRoof", 				 40.8,  4.6,  -7.5, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_1", 					  6.1,  8.9,  33.9, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_2", 					  6.2,  9.0,  59.4, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_3", 					-23.5,  9.9,  56.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_4", 					-39.3,  9.0,  56.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_5", 					  2.7,  9.9, -10.5, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_6", 					 -4.8,  9.9, -28.0,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_7", 					 -9.7,  9.9,  25.2,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_8", 					 20.9,  9.8,  15.9,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_9", 					-21.3,  9.0,   8.5,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_10", 				-21.5,  9.0, -10.4,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_11", 				 34.6,  5.7, -11.2,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_12", 				 44.4,  9.9,  16.1, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("UpperLevel_13", 				 45.1,  9.0, -28.2,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("RepairQuest_1", 				 60.5,  1.5, -48.5,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("RepairQuest_2", 				 69.0,  1.6,  -7.8, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseFirstFloor", 	 10.1,  2.5,  38.3,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_1", 					 14.3,  2.5,  42.4, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_2", 					 21.7,  2.5,  42.0,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("FirstFloor_3", 					 29.5,  2.5,  43.7,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseSecondFloor", 	  9.1,  6.0,  36.3, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_1", 					 12.4,  6.0,  47.5,	"factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_2", 					 20.5,  6.0,  44.3, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_3", 					 21.7,  6.0,  35.2, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("Showers_4", 					 32.0,  6.0,  47.9, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeStaircaseThirdFloor", 	  9.2,  9.7,  36.3, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("MainOffice_1", 					 12.4,  9.7,  39.0, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("MainOffice_2", 					 20.2,  9.7,  38.5, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeRoom1", 					 23.6,  9.7,  37.5, "factory4_night", "BotZone");
		JustNUCore.createBotSpawnPoint("OfficeRoom2", 					 30.9,  9.7,  39.2, "factory4_night", "BotZone");
		
		// woods
		// ZoneBigRocks
		//JustNUCore.createBotSpawnPoint("CultistBunker",	-159.5, 47.4, -233.9, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("RopeCrevice", 		-207.0, 31.3, -214.1, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("SmallerRocks_1", 	-127.3, 15.3, -44.1, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("SmallerRocks_2",	-165.3, 22.0, -56.4, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("SmallerRocks_3", 	-178.4, 28.4, -94.6, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("SmallerRocks_4",	-195.8, 26.0, -72.9, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("Plane_1", 			-252.0, 11.4, -21.0, 	"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("Plane_2", 			-255.1, 9.8, 13.6, 		"woods", "ZoneBigRocks");
		//JustNUCore.createBotSpawnPoint("Plane_3",			-269.0, 11.2, -47.4, 	"woods", "ZoneBigRocks");
		
		// reserve
		// ZoneRailStrorage
		JustNUCore.createBotSpawnPoint("Barrack1_1", 			184.3, -5.4, -224.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_2", 			185.9, -5.4, -216.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_3", 			188.4, -5.4, -207.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_4", 			191.4, -5.4, -201.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_5", 			193.9, -5.4, -218.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_6",			196.5, -5.4, -209.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_7",			197.4, -5.4, -202.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_8",			197.6, -5.4, -205.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack1_9", 			191.4, -5.4, -226.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_1", 			148.5, -5.4, -237.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_2", 			149.9, -5.3, -230.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_3", 			156.7, -5.4, -239.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_4", 			158.5, -5.4, -231.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_5", 			165.5, -5.4, -241.9, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_6", 			167.8, -5.4, -234.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_7", 			168.7, -5.4, -243.1, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Barrack2_8", 			173.5, -5.4, -236.9, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("BrickTower_1", 			121.3, -5.4,  -85.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("BrickTower_2", 			118.1, -1.8,  -87.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("BrickTower_3", 			118.4,  1.0,  -87.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_1", 				 39.9, -5.5, -181.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_2", 				 51.1, -5.5, -185.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_3", 				 57.4, -5.5, -160.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_4", 		 		 62.3, -5.5, -188.9, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_5", 		 		 27.0, -5.5, -178.1, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_6", 		 		 28.0, -5.5, -185.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Bunker_7", 		 		 44.8, -5.5, -156.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideTrainStation_1", 166.7, -0.7, -114.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideTrainStation_2", 161.9, -2.0,  -92.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideTrainStation_3", 214.4, -5.5,  -89.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideTrainStation_4", 236.5, -0.6, -101.1, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_1", 		 97.8,  1.1, -174.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_2", 		 67.0,  0.9, -165.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_3", 		 75.7, -0.6, -227.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_4", 		118.5,  1.2, -215.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_5", 		 33.1,  0.9, -157.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_6", 		 52.0,  0.9, -181.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_7", 		-38.1, -5.3, -172.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("OutsideBunker_8", 		-15.9, -4.1, -166.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_1", 		 50.1, -3.6,  -87.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_2", 		 12.1, -3.6,  -76.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_3", 		  8.9, -3.6, -100.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_4", 		  9.2, -3.6, -121.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_5", 		-10.8, -3.6,  -87.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_6", 		-10.9, -3.6,  -99.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_7", 		-21.7, -3.5, -112.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_8", 		 41.0, -3.6, -107.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_9", 		 56.8, -3.6, -114.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_10", 		 39.7, -3.6, -128.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_11", 		 70.5, -3.6, -123.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("StorageArea_12", 		 74.6, -3.6, -116.9, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_1", 		144.1, -3.7, -138.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_2", 		145.0, -3.7, -155.7, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_3", 		145.7,  0.1, -147.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_4", 		148.3,  0.1, -135.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_5", 		160.8, -3.7, -162.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_6", 		141.0, -3.7, -141.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_7", 		184.0, -3.7, -151.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_8", 		184.5,  0.1, -151.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_9", 		188.1, -3.7, -153.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_10", 		153.3, -5.1, -131.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_11", 		166.7, -0.2, -139.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_12", 		171.0, -3.5, -141.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_13", 		176.7, -5.1, -139.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_14", 		178.2,  0.1, -159.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_15", 		178.7, -5.0, -138.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_16", 		187.2,  0.2, -141.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_17", 		140.5,  2.8, -158.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_18", 		144.0,  8.1, -150.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_19", 		171.6,  2.4, -172.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_20", 		179.6,  0.1, -165.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_21", 		178.4, -4.5, -173.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_22", 		190.6, -3.5, -146.3, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_23", 		211.5, -4.3, -174.0, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_24", 		153.4,  3.2, -127.4, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("TrainStation_25", 		165.3,  3.6, -146.1, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Watchtower_1", 			  0.9,  3.7, -205.1, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("Watchtower_2", 		     -3.1,  3.7, -206.2, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_1",   -81.1, -5.6, -128.8, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_2",  -100.5, -5.6, -122.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_3",   105.6, -4.8,  -96.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_4",  -107.7, -5.3, -113.5, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_5",  -111.2, -5.3, -112.6, 	"rezervbase", "ZoneRailStrorage");
		JustNUCore.createBotSpawnPoint("EndOfTrainStation_6",   -62.4, -7.5, -102.5, 	"rezervbase", "ZoneRailStrorage");
		
		// ZonePTOR1
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_1",   	  7.0, -5.3,  -5.7, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_2",  		  9.2, -5.3,  -2.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_3",   	 10.0, -5.3,   2.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_4",  		 17.3, -5.5,   8.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_5",  		 19.0, -5.3,  -9.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_6",   	  2.6, -5.4, -23.4, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_7",   	  5.8, -5.3, -13.0, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_8",   	  6.4, -5.3,  -9.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_9",   	  9.2, -5.3, -20.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_10",   	 11.5, -5.3, -26.5, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightFirstFloor_11",   	 20.0, -5.3, -29.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_1",  	  0.9, -2.5, -24.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_2",  	  4.7, -2.5, -26.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_3",  	  8.9, -2.5, -20.5, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_4", 		  4.9, -2.5, -15.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_5", 		  7.4, -1.6, -27.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_6",   	 11.4, -2.5, -27.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_7",   	 16.2, -2.5, -27.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_8",   	 22.0, -2.5, -24.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_9",   	  8.5, -2.5,  -4.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_10",  	 12.6, -2.5, -11.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightSecondFloor_11",   	 13.5, -2.5,  -3.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_1",  	  2.1,  0.5, -24.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_2",	  9.1,  0.5, -20.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_3",     5.4,  0.5, -13.4, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_4",  	  7.2,  0.5, -27.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_5",     9.9,  0.5,   5.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_6",    11.7,  0.5, -26.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_7",    15.9,  0.5, -28.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_8",    19.1,  0.5, -19.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_9",    20.6,  0.5, -27.5, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_10",	 22.1,  0.5, -24.5, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_11",   28.6,  0.5,  -0.4, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BlackKnightThirdFloorRoof_12",   20.2,  3.7, -29.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BrickCheckpoint_1",   			 57.2, -1.7, 102.4, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BrickCheckpoint_2",   			 60.3, -1.7, 100.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("BrickCheckpoint_3",   			 59.0, -4.8, 103.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Camp_1",   						 -5.4, -5.5,  11.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Camp_2",   						-11.9, -6.1, -14.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Camp_3",   						-17.1, -5.4,  19.0, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Camp_4",   						-21.0, -5.4,   8.9, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Camp_5",   						-21.8, -6.1, -12.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("FuelCanisters_1",   			 12.3, -5.5,  73.7, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("FuelCanisters_2",   			-10.0, -2.3,  80.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("FuelCanisters_3",   			-24.0, -5.4,  85.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Containers_1",   				 46.0, -5.2, -34.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Containers_2",   				 52.2, -5.3, -13.4, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("Containers_3",   				 61.8, -5.3,  30.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("GasStation_1",  				 21.3, -5.3,  35.6, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("GasStation_2",   				 20.8, -5.2,  32.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("GasStation_3",   				 24.6, -5.3,  34.5, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_1",   	 40.6, -5.2,  62.2, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_2",   	 56.9, -5.2,  65.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_3",   	 64.7, -5.2,  58.3, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_4",   	 71.0, -5.2,  63.1, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_5",   	 77.3, -5.5,  55.8, 	"rezervbase", "ZonePTOR1");
		JustNUCore.createBotSpawnPoint("LivingSpaceBrickHouse_6",   	 78.5, -5.5,  63.8, 	"rezervbase", "ZonePTOR1");
	}
	
}

module.exports = AdditionalBotSpawnpoints;