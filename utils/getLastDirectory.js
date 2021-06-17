const getDirectories = require('../utils/getDirectories');

module.exports = function getLastDirectory(command) {
    const directories = getDirectories(command);

    if (!directories.length) throw Error('No directories');
    const lastDirectory = directories[directories.length - 1];
    return lastDirectory;
}
