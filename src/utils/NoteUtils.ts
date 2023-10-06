import {INoteItem} from '../scenes/NotesScene/types';
import {loadString} from '../storage';
import {SAVED_NOTE_LIST} from '../storage/storageKeys';

export function getNotes() {
  const stringNotes = loadString(SAVED_NOTE_LIST);
  if (stringNotes) {
    const notes = JSON.parse(stringNotes);
    return notes as Array<INoteItem>;
  }
  return [];
}
