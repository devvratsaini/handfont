// previously named 'characterImageUpload.js',
// This function will convert a single character image into its svg format,
// and return it in the form { char: 'A', svg: '<svg>...</svg>' }

const imageToSvg = require("../../controllers/imageToSvg");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = async function characterImageUpload(req, res) {
  upload.single("file")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload error" });
    }

    const requestedFile = req.file;

    if (!requestedFile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const svgString = await imageToSvg(requestedFile.buffer);

      res.status(200).json({svgString});
    } catch (error) {
      res.status(500).json({ error: "Failed to process image" });
    }
  });
};
