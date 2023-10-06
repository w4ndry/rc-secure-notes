import {useCallback} from 'react';
import {getNotes} from '../utils/NoteUtils';
import {save} from '../storage';
import {SAVED_NOTE_LIST} from '../storage/storageKeys';
import {INoteItem} from '../scenes/NotesScene/types';

function useNotes() {
  const saveNote = useCallback((title: string, note: string) => {
    const notes = getNotes();
    const newNotes = JSON.stringify([
      ...notes,
      {
        id: notes.length + 1,
        title,
        note,
      },
    ]);
    save(SAVED_NOTE_LIST, newNotes);
  }, []);

  const editNote = useCallback(({id, title, note}: INoteItem) => {
    const notes = getNotes();
    const newNote = notes.map(item => {
      if (item.id === id) {
        return {...item, title, note};
      }
      return item;
    });
    const newNotes = JSON.stringify(newNote);
    save(SAVED_NOTE_LIST, newNotes);
  }, []);

  const deleteNote = useCallback((id: number) => {
    const notes = getNotes();
    const filteredNotes = notes.filter(item => item.id !== id);
    const newNotes = JSON.stringify(filteredNotes);
    save(SAVED_NOTE_LIST, newNotes);
  }, []);

  return {saveNote, editNote, deleteNote};
}

export default useNotes;
