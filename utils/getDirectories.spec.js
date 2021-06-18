const getDirectories = require('./getDirectories');

describe('getDirectories', () => {
    it('should return an array of directories', () => {
        const mockedCommand = 'CREATE grains/squash';
        const mockedDirectories = ['grains', 'squash'];

        const directories = getDirectories(mockedCommand);

        expect(directories).toMatchObject(mockedDirectories)
    });

    it('should throw the error if command is not exist', () => {
        const mockedCommand = '';
        
        expect(() => { getDirectories(mockedCommand) }).toThrow('No command was provided');
    });
  });