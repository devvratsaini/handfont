// the request will contain the structure defined in sampleFontStructure.js
// { 
//   name: String, 
//   characters: [char, String] 
// }
// convert it into ttf and send the file as response

const path = require("path");
const { FONT_OUTPUT_DIR } = require("../../config");

module.exports = async function fontDownload(req, res) {
  const fontPath = path.join(FONT_OUTPUT_DIR, "/MyHandwritingFont.ttf");

  res.sendFile(fontPath, (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to send the font file" });
    }
  });
};

