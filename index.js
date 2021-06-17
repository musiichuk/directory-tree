const getCommandsList = require('./utils/getCommandsList');
const createDirectories = require('./services/createDirectories');
const listDirectories = require('./services/listDirectories');
const deleteDirectories = require('./services/deleteDirectories');
const moveDirectories = require('./services/moveDirectories');

const executors = {
    CREATE: createDirectories,
    MOVE: moveDirectories,
    LIST: listDirectories,
    DELETE: deleteDirectories
}

function init() {
    try {
        const commandsList = getCommandsList();
        const directories = {};
        commandsList.forEach(command => {
            try {
                const action = command.split(' ')[0];
                const execute = executors[action];
                execute(command, directories);
            } catch (err) {
                console.error(err.message);
            }

        });
    } catch (error) {
        console.error(error.message);
    }
}

init();