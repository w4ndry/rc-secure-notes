import { getNotes } from '../NoteUtils';
import { loadString } from '../../storage';

jest.mock('../../storage', () => ({
  loadString: jest.fn(),
}));

const notes = [
  {
    id: 1,
    title: 'Note 1',
    note: 'Note 1 Description',
  },
];

describe('Test getNotes function', () => {
  it('Given undefined saved notes, should return empty array', () => {
    expect(getNotes()).toStrictEqual([]);
  });

  it('Given saved notes, should return the correct data', () => {
    loadString.mockReturnValueOnce(JSON.stringify(notes));
    expect(getNotes()).toStrictEqual(notes);
  });
});
