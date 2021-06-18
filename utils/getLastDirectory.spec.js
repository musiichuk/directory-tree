const { mockedCommands } = require('../mocks/mocks');
const getLastDirectory = require('./getLastDirectory');

const getDirectories = require('../utils/getDirectories');
jest.mock('../utils/getDirectories', () => jest.fn());

describe('getLastDirectory', () => {
    it('should return the last directory from the command', () => {
        getDirectories.mockImplementation(() => ['grains', 'squash']);

        const lastDirectory = getLastDirectory('CREATE grains/squash');

        expect('squash').toEqual(lastDirectory);
    });

    it('should throw the error if getDirectories return an empty array', () => {
        getDirectories.mockImplementation(() => []);
        
        expect(() => { getLastDirectory('CREATE grains/squash')}).toThrow('No directories');
    });
  });