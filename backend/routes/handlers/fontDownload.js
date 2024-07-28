// the request will contain the structure defined in sampleFontStructure.js
// {
//   name: String,
//   characters: [char, String]
// }
// convert it into ttf and send the file as response

const path = require("path");
const { FONT_OUTPUT_DIR, FONT_NAME } = require("../../config");
const SvgFontToTtfFont = require("../../controllers/SvgFontToTtfFont");
const svgToSvgFont = require("../../controllers/svgToSvgFont");

module.exports = async function fontDownload(req, res) {
    try {
        const svgIconResponse = req.body;
        SvgFontToTtfFont(await svgToSvgFont(svgIconResponse));
        const fontPath = path.join(FONT_OUTPUT_DIR, `${FONT_NAME}.ttf`);

        res.sendFile(fontPath, (err) => {
            if (err) {
                res.status(500).json({ error: "Failed to send the font file" });
            }
        });
    } catch (error) {
        console.error(error);
    }
};
