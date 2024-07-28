const SVGIcons2SVGFont = require("svgicons2svgfont");
const { Readable } = require("stream");

module.exports = function svgToSvgFont({ fontName, characters }) {
    return new Promise((resolve, reject) => {
        const fontStream = new SVGIcons2SVGFont({
            fontName: fontName,
            normalize: true,
            centerHorizontally: true,
        });

        let svgFontContent = "";
        fontStream
            .on("data", (chunk) => {
                svgFontContent += chunk;
            })
            .on("finish", () => {
                console.log("SVG font created successfully");
                resolve(svgFontContent);
            })
            .on("error", (err) => {
                console.error("Error creating SVG font:", err);
                reject(err);
            });

        characters.forEach(({ char, svgString }) => {
            const glyph = new Readable();
            glyph.push(svgString);
            glyph.push(null);

            // ignore the next line, .metadata is being created not accessed.
            // @ts-ignore
            glyph.metadata = {
                unicode: [char],
                name: char,
            };

            fontStream.write(glyph);
        });

        fontStream.end();
    });
};
