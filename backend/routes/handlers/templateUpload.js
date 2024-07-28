const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { TEMPLATE_DIR, IMAGE_CHARACTER_DIR } = require("../../config");
const gridSplitter = require("../../controllers/gridSplitter");
const imageToSvg = require("../../controllers/imageToSvg");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = async function templateUpload(req, res) {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload error" });
    }

    const uploadedFile = req.file;

    if (!uploadedFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const splitImages = await gridSplitter(uploadedFile.buffer, true);
      const svgIconResponse = {
        fontName: "",
        characters: [],
      };

      for (const [_, imageObject] of Object.entries(splitImages)) {
        const { imageData, char } = imageObject;
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
