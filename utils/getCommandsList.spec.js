const { mockedCommands } = require('../mocks/mocks');
const getCommandsList = require('./getCommandsList');
jest.mock('./getCommandsList', () => jest.fn());

describe('getCommandsList', () => {
    it('should return the list of commands', () => {
        getCommandsList.mockImplementation(() => mockedCommands);

        const commands = getCommandsList();

        expect(commands).toMatchObject(mockedCommands);
    });

    it('should throw the error if something went wrong', () => {
        getCommandsList.mockImplementation(() => { throw Error('Error while reading command.txt file')});

        expect(() => { getCommandsList() }).toThrow('Error while reading command.txt file');
    });
  });