const fs = require("fs");
const path = require("path");
const svg2ttf = require("svg2ttf");
const { FONT_OUTPUT_DIR, FONT_NAME } = require("../config");
/**
 *
 * @param {string} svgFontPath
 */
module.exports = function convertSvgToTtf(svgFontPath) {
    const svgFontString = fs.readFileSync(svgFontPath, "utf8");

    const ttf = svg2ttf(svgFontString, {});
    const ttfPath = path.join(FONT_OUTPUT_DIR, `${FONT_NAME}.ttf`);

    fs.writeFile(ttfPath, Buffer.from(ttf.buffer), (err) => {
        if (err) {
            console.error("Error writing TTF font:", err);
        } else {
            console.log("TTF font created successfully");
        }
    });
};
