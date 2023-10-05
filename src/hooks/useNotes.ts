import { useCallback, useMemo } from 'react';
import { getNotes } from '../utils/NoteUtils';
import { remove, save } from '../storage';
import { SAVED_NOTE_LIST } from '../storage/storageKeys';
import { INoteItem } from '../scenes/NotesScene/types';

function useNotes() {
  const notes = useMemo(() => getNotes(), []);

  const saveNote = useCallback(
    (title: string, note: string) => {
      const newNotes = JSON.stringify([
        ...notes,
        {
          id: notes.length + 1,
          title,
          note,
        },
      ]);
      save(SAVED_NOTE_LIST, newNotes);
    },
    [notes],
  );

  const editNote = useCallback(
    ({ id, title, note }: INoteItem) => {
      const newNote = notes.map(item => {
        if (item.id === id) {
          return { ...item, title, note };
        }
        return item;
      });
      const newNotes = JSON.stringify(newNote);
      save(SAVED_NOTE_LIST, newNotes);
    },
    [notes],
  );

  const deleteNote = useCallback(() => {
    remove(SAVED_NOTE_LIST);
  }, []);

  return { notes, saveNote, editNote, deleteNote };
}

export default useNotes;
