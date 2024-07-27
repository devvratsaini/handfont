const {
    vectorize,
    ColorMode,
    Hierarchical,
    PathSimplifyMode,
} = require("@neplex/vectorizer");
const fs = require("fs");

// const imageBuffer = fs.readFileSync(PATH);

/**
 *
 * @param {Buffer} imageBuffer
 * @returns {Promise<String>}
 */
module.exports = async function imageToSvg(imageBuffer) {
    const svgString = await vectorize(imageBuffer, {
        colorMode: ColorMode.Color,
        colorPrecision: 2,
        filterSpeckle: 4,
        spliceThreshold: 45,
        cornerThreshold: 60,
        hierarchical: Hierarchical.Stacked,
        mode: PathSimplifyMode.Spline,
        layerDifference: 5,
        lengthThreshold: 5,
        maxIterations: 2,
        pathPrecision: 5,
    });

    return svgString;
    fs.writeFile("./vector.svg", svgString, (err) => {
        console.error("Error writing SVG:", err);
    });
};
