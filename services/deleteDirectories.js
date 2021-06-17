const getLastDirectory = require('../utils/getLastDirectory');

module.exports = function deleteDirectories(command, directories) {
    const directoryToRemove = getLastDirectory(command);
    directories[directoryToRemove] && delete directories[directoryToRemove];

    Object.values(directories).forEach((directory) => {
        if (typeof directory !== 'object') return;
        deleteDirectories(command, directory);
    });
}
