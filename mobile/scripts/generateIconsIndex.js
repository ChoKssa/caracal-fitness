const fs = require("fs");
const path = require("path");

// Répertoires des SVG
const directories = [
	path.join(__dirname, "../assets/icons/countries/1x1"),
	path.join(__dirname, "../assets/icons/countries/4x3"),
];

directories.forEach((directory) => {
	const files = fs
		.readdirSync(directory)
		.filter((file) => file.endsWith(".png"));

	const exportStatements = files
		.map((file) => {
			const fileName = path.basename(file, ".png");
			return `import ${fileName.toUpperCase()} from './${fileName}.png';`;
		})
		.join("\n");

	const exportObject = `export const flags = {\n${files
		.map((file) => {
			const fileName = path.basename(
				file.split(".")[0].toUpperCase(),
				".png"
			);
			return `  ${fileName},`;
		})
		.join("\n")}\n};`;

	const content = `${exportStatements}\n\n${exportObject}\n`;

	fs.writeFileSync(path.join(directory, "index.ts"), content);
	console.log(`Index generated for ${directory}`);
});
