const {
    vectorize,
    ColorMode,
    Hierarchical,
    PathSimplifyMode,
} = require("@neplex/vectorizer");
const fs = require("fs");

/**
 *
 * @param {Buffer} imageBuffer
 * @returns {Promise<String>}
 */
module.exports = async function imageToSvg(imageBuffer) {
    const svgString = await vectorize(imageBuffer, {
        colorMode: ColorMode.Binary,
        colorPrecision: 2,
        filterSpeckle: 4,
        spliceThreshold: 45,    // TODO: fine tuning during testing
        cornerThreshold: 60,    // TODO: fine tuning during testing
        hierarchical: Hierarchical.Stacked,
        mode: PathSimplifyMode.Spline,
        layerDifference: 5,
        lengthThreshold: 5,
        maxIterations: 2,
        pathPrecision: 5,
    });
    
    // fs.writeFile("./vector.svg", svgString, (err) => {
    //     if (err) {
    //         console.error("Error writing SVG:", err);
    //     } else {
    //         console.log("SVG written successfully!");
    //     }
    // });

    return svgString;
};
