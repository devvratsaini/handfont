const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { IMAGE_CHARACTER_DIR, GRID_SIZE, CHARACTERS } = require("../config");

const characterCount = CHARACTERS.length;

/**
 * Splits a grid image into individual character images
 * @param {Buffer | string} imageBuffer - The input image as a buffer or file path
 * @param {boolean} writeToDisk - Whether to write the extracted images to disk
 */
async function splitGrid(imageBuffer, writeToDisk = false) {
    try {
        const image = sharp(imageBuffer);
        const metadata = await image.metadata();

        if (!metadata.width || !metadata.height) {
            throw new Error("Failed to read image metadata.");
        }

        // width and height of each cell in the grid
        const cellWidth = Math.floor(metadata.width / GRID_SIZE.cols);
        const cellHeight = Math.floor(metadata.height / GRID_SIZE.rows);

        let currentCharacterCount = 0;

        const imagesDataObject = [];

        for (let row = 0; row < GRID_SIZE.rows; row++) {
            for (let col = 0; col < GRID_SIZE.cols; col++) {
                if (currentCharacterCount >= characterCount) break;

                const left = col * cellWidth;
                const top = row * cellHeight;

                // to prevent exceeding image boundaries
                const width = Math.min(cellWidth, metadata.width - left);
                const height = Math.min(cellHeight, metadata.height - top);

                const char = CHARACTERS[currentCharacterCount];

                // console.log(
                //     `Extracting character '${char}' at (${left}, ${top}, ${width}, ${height})`
                // );

                const image = sharp(imageBuffer).extract({
                    top,
                    width,
                    height,
                    left,
                });

                imagesDataObject.push({
                    char,
                    imageData: await image.toBuffer(),
                });

                if (writeToDisk) {
                    const smallOrCaps =
                        char === char.toLowerCase() ? "small" : "caps";
                    const outputPath = path.join(
                        IMAGE_CHARACTER_DIR,
                        `${char} ${smallOrCaps}.png`
                    );
                    await image.toFile(outputPath);
                }

                // console.log(`Successfully extracted character '${char}'`);
                currentCharacterCount++;
            }
        }

        // console.log(`Successfully split ${currentCharacterCount} characters.`);
        return imagesDataObject;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

module.exports = splitGrid;
