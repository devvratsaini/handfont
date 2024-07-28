const fs = require("fs");
const path = require("path");
const svg2ttf = require("svg2ttf");
const { FONT_OUTPUT_DIR, FONT_NAME } = require("../config");
/**
 *
 * @param {string} svgFontString
 */
module.exports = function convertSvgToTtf(svgFontString) {
    // const svgFontString = fs.readFileSync(svgFontPath, "utf8");

    const ttf = svg2ttf(svgFontString, {});
    const ttfPath = path.join(FONT_OUTPUT_DIR, `${FONT_NAME}.ttf`);

    fs.writeFileSync(ttfPath, Buffer.from(ttf.buffer));
};
