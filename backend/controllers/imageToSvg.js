const {
    vectorize,
    ColorMode,
    Hierarchical,
    PathSimplifyMode,
} = require("@neplex/vectorizer");
const fs = require("fs");
const path = require("path");
const { SVG_CHARACTER_DIR } = require("../config");

/**
 *
 * @param {Buffer} imageBuffer
 * @param {String=} char - If char is given, the image will be written to disk
 * @returns {Promise<String>}
 */
module.exports = async function imageToSvg(imageBuffer, char) {
    
    if (!Buffer.isBuffer(imageBuffer)) {
        console.log(imageBuffer);
        throw new Error("imageBuffer must be a Buffer");
    }
    
    const svgString = await vectorize(imageBuffer, {
        colorMode: ColorMode.Binary,
        colorPrecision: 2,
        filterSpeckle: 4,
        spliceThreshold: 45, // TODO: fine tuning during testing
        cornerThreshold: 60, // TODO: fine tuning during testing
        hierarchical: Hierarchical.Stacked,
        mode: PathSimplifyMode.Spline,
        layerDifference: 5,
        lengthThreshold: 5,
        maxIterations: 2,
        pathPrecision: 5,
    });

    if (char) {
        const smallOrCaps = char === char.toLowerCase() ? "small" : "caps";
        fs.writeFileSync(
            path.join(SVG_CHARACTER_DIR, `${char} ${smallOrCaps}.svg`),
            svgString
        );
    }

    return svgString;
};
