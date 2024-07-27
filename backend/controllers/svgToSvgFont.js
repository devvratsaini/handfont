const fs = require("fs");
const path = require("path");
const { FONT_NAME, SVG_CHARACTER_DIR, FONT_OUTPUT_DIR } = require("../config");
const SVGIcons2SVGFont = require("svgicons2svgfont");
const convertSvgToTtf = require("./SvgFontToTtfFont");

module.exports = function svgToSvgFont() {
    const svgFontPath = path.join(FONT_OUTPUT_DIR, `${FONT_NAME}.svg`);

    const fontStream = new SVGIcons2SVGFont({
        fontName: FONT_NAME,
        normalize: true,
    });

    fontStream
        .pipe(fs.createWriteStream(svgFontPath))
        .on("finish", () => {
            console.log("SVG font created successfully");
            convertSvgToTtf(svgFontPath);
        })
        .on("error", (err) => {
            console.error("Error creating SVG font:", err);
        });

    // read SVG files and add them to the font
    fs.readdir(SVG_CHARACTER_DIR, (err, files) => {
        if (err) {
            console.error("Error reading input directory:", err);
            return;
        }

        files
            .filter((file) => path.extname(file).toLowerCase() === ".svg")
            .forEach((file) => {
                const glyph = fs.createReadStream(
                    path.join(SVG_CHARACTER_DIR, file)
                );
                const unicode = String.fromCharCode(
                    path.parse(file).name.charCodeAt(0)
                );
                // ignore the next line, .metadata is being created not accessed.
                // @ts-ignore
                glyph.metadata = {
                    unicode: [unicode],
                    name: path.parse(file).name,
                };
                fontStream.write(glyph);
            });

        fontStream.end();
    });
};
