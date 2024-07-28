const { Router } = require("express");
const {
    fontDownload,
    characterImageUpload,
    templateUpload,
} = require("./handlers");

const router = Router();

router.post("/filledTemplate", templateUpload);
router.post("/characterImage", characterImageUpload);
router.post("/fontDownload", fontDownload);

module.exports = router;
