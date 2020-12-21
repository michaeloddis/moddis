/**
 * Converts a pixel to an rem unit, enabling easier use by engineers
 * @param {string} pixelString - String containing one or more pixel values with or without the px identifier.  All of the following are valid: 4px | 4 | 4px 4px | 4 4
 * @return {object} - Return a converted rem string
 */
const rems = (pixelString = '') => {
    const pixels = String(pixelString).split(' ');
    let remString = '';

    pixels.forEach((pixel) => {
        const baseFontSize = 16;
        const parsedPixel = pixel.replace('px', '');
        const rem = parsedPixel / baseFontSize;

        remString += ` ${rem}rem`;
    });

    return remString.trim();
};

export default rems;