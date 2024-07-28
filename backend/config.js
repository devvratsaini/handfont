const fs = require("fs");
const path = require("path");

const TEMPLATE_DIR = path.join(__dirname, "/public/templateImages");
const IMAGE_CHARACTER_DIR = path.join(__dirname, "/public/imageCharacters");
const SVG_CHARACTER_DIR = path.join(__dirname, "/public/svgCharacters");
const FONT_OUTPUT_DIR = path.join(__dirname, "/public/fontOutput");
const FONT_NAME = "MyHandwritingFont";
const PORT = 3000;

// create directories if they don't exist
if (!fs.existsSync(FONT_OUTPUT_DIR)) {
    fs.mkdirSync(FONT_OUTPUT_DIR);
}

if (!fs.existsSync(SVG_CHARACTER_DIR)) {
    fs.mkdirSync(SVG_CHARACTER_DIR);
}

if (!fs.existsSync(IMAGE_CHARACTER_DIR)) {
    fs.mkdirSync(IMAGE_CHARACTER_DIR);
}

if (!fs.existsSync(TEMPLATE_DIR)) {
    fs.mkdirSync(TEMPLATE_DIR);
}

module.exports = {
    TEMPLATE_DIR,
    IMAGE_CHARACTER_DIR,
    SVG_CHARACTER_DIR,
    FONT_OUTPUT_DIR,
    FONT_NAME,
    PORT,
};
