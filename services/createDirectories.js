const getDirectories = require('../utils/getDirectories');

module.exports = function createDirectories(command, directories) {
    const nestedDirectories = getDirectories(command);

    let current = directories;
    nestedDirectories.forEach(el => {
        if (current[el]) {
            current = current[el];
        } else {
            current[el] = {};
            current = current[el];
        }
    })
}