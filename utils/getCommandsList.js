const fs = require('fs');

exports.getCommandsList = function () {    
    try {
        const commandsList = fs.readFileSync('./commands.txt', 'utf8').split('\n');
        return commandsList;
    } catch (error) {
        throw Error('Error while reading command.txt file')
    }
}