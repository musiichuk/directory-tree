module.exports = function getDirectories(command = '') {
    if (!command) throw Error('No command was provided');

    const directories = command.split(' ')[1].split('/');
    return directories;
}
