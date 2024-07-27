const { Router } = require("express");
const {
    fontDownload,
    characterImageUpload,
    templateUpload,
} = require("./handlers");

const router = Router();

router.post("/filledTemplate", templateUpload); //TODO: include multer middleware
router.post("/characterImage", characterImageUpload);  //TODO: include multer middleware
router.post("/fontDownload", fontDownload);

module.exports = router;
