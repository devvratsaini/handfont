const multer = require("multer");
const path = require("path");

const { TEMPLATE_DIR, IMAGE_CHARACTER_DIR } = require("../../config");
const gridSplitter = require("../../controllers/gridSplitter");
const imageToSvg = require("../../controllers/imageToSvg");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = async function templateUpload(req, res) {
    upload.single("file")(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: "File upload error" });
        }

        const uploadedFile = req.file;

        if (!uploadedFile) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        try {
            const splitImages = await gridSplitter(uploadedFile.buffer, true);
            /**
             * @typedef {Object} Character
             * @property {string} char - The character.
             * @property {string} svgString - The SVG string.
             */

            /**
             * @typedef {Object} SvgIconResponse
             * @property {string} fontName - The name of the font.
             * @property {Character[]} characters - The array of character objects.
             */

            /**
             * @type {SvgIconResponse}
             */
            const svgIconResponse = {
                fontName: "",
                characters: [],
            };
            if (!splitImages) {
                return res.status(500).json({ error: "Failed to split image" });
            }
            for (const { imageData, char } of splitImages) {
                const svgString = await imageToSvg(imageData);
                svgIconResponse.characters.push({
                    char,
                    svgString,
                });
            }

            res.json(svgIconResponse);
        } catch (error) {
            res.status(500).json({ error: "Failed to process image" });
        }
    });
};
