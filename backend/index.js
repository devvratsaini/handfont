const fs = require("fs");
const path = require("path");
const SVGIcons2SVGFont = require("svgicons2svgfont");
const svg2ttf = require("svg2ttf");

const INPUT_DIR = "./svg_input";
const OUTPUT_DIR = "./font_output";
const FONT_NAME = "MyHandwritingFont";

if (!fs.existsSync(OUTPUT_DIR)) {
    // checking if output directtory
    fs.mkdirSync(OUTPUT_DIR);
}

const fontStream = new SVGIcons2SVGFont({
    fontName: FONT_NAME,
    normalize: true,
});

// write the SVG font to a file
const svgFontPath = path.join(OUTPUT_DIR, `${FONT_NAME}.svg`);
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
fs.readdir(INPUT_DIR, (err, files) => {
    if (err) {
        console.error("Error reading input directory:", err);
        return;
    }

    files
        .filter((file) => path.extname(file).toLowerCase() === ".svg")
        .forEach((file) => {
            const glyph = fs.createReadStream(path.join(INPUT_DIR, file));
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

function convertSvgToTtf(svgFontPath) {
    fs.readFile(svgFontPath, "utf8", (err, svgFont) => {
        if (err) {
            console.error("Error reading SVG font:", err);
            return;
        }

        const ttf = svg2ttf(svgFont, {});
        const ttfPath = path.join(OUTPUT_DIR, `${FONT_NAME}.ttf`);

        fs.writeFile(ttfPath, Buffer.from(ttf.buffer), (err) => {
            if (err) {
                console.error("Error writing TTF font:", err);
            } else {
                console.log("TTF font created successfully");
            }
        });
    });
}
