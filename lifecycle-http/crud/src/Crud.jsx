import {useEffect, useState} from 'react';
import {Note} from "./Note";
import {AddNote} from "./AddNote";
import {Title} from "./Title";
import ApiService from "./ApiService";

export const Crud = () => {
  const apiService = new ApiService();
  const [notes, setNotes] = useState([]);

  const loadNotes = () => apiService.getNotes().then(res => setNotes([...res]));

  useEffect(() => {
    loadNotes();
  }, [])

  return(
    <>
      <Title updateNotes={loadNotes}/>
      <div className="notes">
        {notes.map(note => {
          return <Note content={note.content} id={note.id} key={note.id} updateNotes={loadNotes}/>
        })}
      </div>
      <AddNote updateNotes={loadNotes}/>
    </>

  )
}
