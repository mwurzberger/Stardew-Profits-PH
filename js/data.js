// Options used to draw the graph.
var options = {
	"produce" : 0,
	"planted": 1,
    "maxSeedMoney": 0,
	"days": 28,
	"fertilizer": 2,
	"level": 0,
	"season": 4,
	"buySeed": false,
	"buyFert": false,
	"average": false,
    "fertilizer": 2,
    "fertilizerSource": 0,
	"seeds": {
		"pierre": true,
		"joja": true,
		"special": true
	},
	"skills": {
		"till": false,
		"agri": false,
		"arti": false
	},
	"foodIndex": 0,
	"foodLevel": 0,
	"extra": false
};

// Different fertilizers with their stats.
var fertilizers = [
	{
		"name": "None",
		"ratio": 0,
		"growth": 1,
		"cost": 0
	},
	{
		"name": "Basic Fertilizer",
		"ratio": 1,
		"growth": 1,
		"cost": 100
	},
	{
		"name": "Quality Fertilizer",
		"ratio": 2,
		"growth": 1,
		"cost": 150
	},
	{
		"name": "Speed-Gro",
		"ratio": 0,
		"growth": 0.9,
		"cost": 100
	},
	{
		"name": "Deluxe Speed-Gro",
		"ratio": 0,
		"growth": 0.75,
		"cost": 150,
		"alternate_cost": 80
	},
	{
		"name": "Deluxe Fertilizer",
		"ratio": 3,
		"growth": 1,
		"cost": 0
	},
	{
		"name": "Hyper Speed-Gro",
		"ratio": 0,
		"growth": 0.67,
		"cost": 0
	}
];

// Different seasons with predefined crops.
var seasons = [
	{
		"name": "Spring",
		"duration": 28,
		"crops": [
			crops.coffeebean,
			crops.strawberry,
			crops.rhubarb,
			crops.potato,
			crops.cauliflower,
			crops.greenbean,
			crops.tealeaves,
			crops.kale,
			crops.unmilledrice,
			crops.garlic,
			crops.parsnip,
			crops.bluejazz,
			crops.tulip,
			crops.ancientfruit,
			crops.springseeds,
			crops.Lentils_PH,
			crops.Raspberry_PH,
			crops.Watermelon_PH,
			crops.Carrot_PH,
			crops.FieldPea_PH,
			crops.Asparagus_PH
		]
	},
	{
		"name": "Summer",
		"duration": 28,
		"crops": [
			crops.pineapple,
			crops.blueberry,
			crops.starfruit,
			crops.redcabbage,
			crops.hops,
			crops.melon,
			crops.hotpepper,
			crops.tealeaves,
			crops.tomato,
			crops.radish,
			crops.summerspangle,
			crops.poppy,
			crops.wheat,
			crops.corn,
			crops.coffeebean,
			crops.sunflower,
			crops.ancientfruit,
			crops.taroroot,
			crops.summerseeds,
			crops.Onion_PH,
			crops.Basil_PH,
			crops.Currant_PH,
			crops.DragonFruit_PH,
			crops.BellPepper_PH,
			crops.Cucumber_PH
		]
	},
	{
		"name": "Fall",
		"duration": 28,
		"crops": [
			crops.sweetgemberry,
			crops.cranberries,
			crops.pumpkin,
			crops.grape,
			crops.artichoke,
			crops.beet,
			crops.eggplant,
			crops.amaranth,
			crops.yam,
			crops.tealeaves,
			crops.fairyrose,
			crops.bokchoy,
			crops.sunflower,
			crops.wheat,
			crops.corn,
			crops.ancientfruit,
			crops.fallseeds,
			crops.Peanut_PH,
			crops.Soy_PH,
			crops.Quince_PH,
			crops.Huckleberry_PH,
			crops.ButternutSquash_PH,
			crops.SweetPotato_PH
		]
	},
	{
		"name": "Winter",
		"duration": 28,
		"crops": [
			crops.winterseeds,
			crops.Parsley_PH,
			crops.Broccoli_PH,
			crops.Chard_PH,
			crops.Lettuce_PH,
			crops.Elderberry_PH,
			crops.SilverGourd_PH
		]
	},
	{
		"name": "Greenhouse",
		"duration": 112,
		"crops": [
			crops.pineapple,
			crops.coffeebean,
			crops.strawberry,
			crops.rhubarb,
			crops.potato,
			crops.cauliflower,
			crops.greenbean,
			crops.kale,
			crops.unmilledrice,
			crops.garlic,
			crops.parsnip,
			crops.bluejazz,
			crops.tulip,
			crops.blueberry,
			crops.starfruit,
			crops.redcabbage,
			crops.hops,
			crops.melon,
			crops.hotpepper,
			crops.tomato,
			crops.radish,
			crops.summerspangle,
			crops.poppy,
			crops.wheat,
			crops.corn,
			crops.sweetgemberry,
			crops.cranberries,
			crops.pumpkin,
			crops.grape,
			crops.tealeaves,
			crops.artichoke,
			crops.beet,
			crops.eggplant,
			crops.amaranth,
			crops.yam,
			crops.fairyrose,
			crops.bokchoy,
			crops.sunflower,
			crops.ancientfruit,
			crops.cactusfruit,
			crops.taroroot
		]
	}
];
