const deleteDirectories = require('../services/deleteDirectories');
const createDirectories = require('../services/createDirectories');

module.exports = function moveDirectories(command, directories) {
    const args = command.split(' ').slice(1);
    const [sourceDirectory, targetDirectory] = args;

    const sourceObj = getSourceObj(sourceDirectory, directories);
    const objNameToInsert = sourceDirectory.split('/').slice(-1)[0];
    
    deleteDirectories(`DELETE ${sourceDirectory}`, directories)
    insertDirectory({directories, targetDirectory, objNameToInsert, sourceObj})
}

const getSourceObj = (sourceDirectory, directories) => {
    let sourceObj = directories;
    sourceDirectory.split('/').forEach(path => {
        sourceObj = sourceObj[path];
        if (!sourceObj) {
            throw new Error(`${sourceDirectory} does not exist`);
        }
    });

    return sourceObj;
}


const insertDirectory = ({directories, targetDirectory, objName, objValue}) => {
    let targetNode = directories;
    targetDirectory.split('/').forEach(path => {
        targetNode = targetNode[path];
        if (!targetNode) {
            throw new Error(`${targetDirectory} does not exist`);
        }
    });
    targetNode[objName] = objValue;
}