// cd '/mnt/c/Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/Plentiful Harvest V1.1.3'
// Drop lookup.js in the mod directory
// NODE_PATH=. node lookup.js
// Copy the .png files to the Stardew-Profits-PH and resize to 48x48
// cd /mnt/e/Dropbox/dev/Stardew-Profits-PH/
// git commit


const fs = require('fs');
const path = require('path');

const basePath = process.env.NODE_PATH;

// const getDirectories = source =>
// 	fs.readdirSync(source, { withFileTypes: true })
// 		.filter(dirent => dirent.isDirectory())
// 		.map(dirent => dirent.name);

// const getDirectories = (source, callback) =>
// 	readdir(source, { withFileTypes: true }, (err, files) => {
// 		if (err) {
// 			callback(err);
// 		} else {
// 			callback(files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name));
// 		}
// 	});

async function performLoop() {
	console.log('Entry 1');
	const phCropMap = new Map();

	// Crops Loop
	const cropPath = path.join('[JA] Plentiful Harvest','Crops');
	const cropKeys = await fs.readdirSync(cropPath, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
	cropKeys.forEach((key) => {
		console.log('Crop Loop', key);
		// Copy and rename images
		var inStr = fs.createReadStream(path.join(cropPath, key, 'seeds.png'));
		var outStr = fs.createWriteStream(path.join(basePath, `${key}.png`));
		inStr.pipe(outStr);
		console.log('Entry 2');

		const rawdata = fs.readFileSync(path.join(cropPath, key, 'crop.json'));
		const data = eval(`(${rawdata})`);

		phCropMap.set(key, {
			name: data.Name,
			img: `${key}.png`,
			growth: {
				initial: data.Phases.reduce((prev, cur) => prev + cur, 0),
				regrow: data.RegrowthPhase,
			},
			seeds: {
				pierre: 0,
				joja: 0,
				special: data.SeedPurchasePrice,
				specialLoc: data.SeedPurchaseFrom,
				specialUrl: '',
			},
			produce: {
				extra: data.Bonus ? data.Bonus.MinimumPerHarvest - 1 : 0,
				extraPerc: data.Bonus ? data.Bonus.ExtraChance : 0,
				price: 0,
				jarType: data.Type === 'Fruit' ? 'Jelly' : 'Pickles',
				kegType: data.Type === 'Fruit' ? 'Wine' : 'Juice',
			},
			metadata: {
				type: data.Type,
				isTrellis: data.TrellisCrop,
				isScytheHarvest: data.HarvestWithScythe,
				isSpring: data.Seasons.includes('spring'),
				isSummer: data.Seasons.includes('summer'),
				isFall: data.Seasons.includes('fall'),
				isWinter: data.Seasons.includes('winter'),
			}			
		});
	});


	// Objects Loop
	const objectPath = path.join('[JA] Plentiful Harvest','Objects');
	const objectKeys = await fs.readdirSync(objectPath, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
	objectKeys.forEach((key) => {
		console.log('Object Loop', key);
		const rawdata = fs.readFileSync(path.join(objectPath, key, 'object.json'), {encoding: 'utf-8'});
		const data = eval(`(${rawdata})`);
		if (phCropMap.has(key)) {
			const curData = phCropMap.get(key);
			const energy = data.Edibility * 2.5;
			curData.produce.price = data.Price;
			curData.metadata.edibility = data.Edibility;
			curData.metadata.energy = Math.trunc(data.Edibility * 2.5);
			curData.metadata.health = Math.trunc(data.Edibility * 2.5 * 0.45);
			curData.metadata.giftTastes = data.GiftTastes;
			phCropMap.set(key, curData);
		} else {
			console.log(`No match found for ${key}`);
		}
	});
	
// Edibility above 0 means that the item increases energy by edibility times 2.5 (rounded up) plus edibility times quality, and health by energy times 0.45 (truncated).
	console.log('Entry 3');
	console.log('phCropMap', phCropMap);

	
	const newJsonData = Array.from(phCropMap.values());
	const newJsonFile = JSON.stringify(newJsonData);
	const outputPath = path.join(basePath, 'phCropData.json');
	fs.writeFileSync(outputPath, newJsonFile);
	
	const newJsonObjectData = {};
	phCropMap.forEach((value, key, map) => {
		newJsonObjectData[key] = value;
		delete newJsonObjectData[key].metadata;
	});
	const newProfitsFile = JSON.stringify(newJsonObjectData);
	const profitsOutputPath = path.join(basePath, 'profitsCropData.json');
	fs.writeFileSync(profitsOutputPath, newProfitsFile);
}
performLoop();

