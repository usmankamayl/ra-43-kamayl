import {useState} from "react";
import ApiService from "./ApiService";
import PropTypes from 'prop-types';


export function AddNote({updateNotes}) {
  const [form, setForm] = useState({
    content: ""
  });

  const apiService = new ApiService();

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddNote = async (e) => {
    e.preventDefault();

    const note = {content: form.content};

    await apiService.addNewNote(note)
   .then((res) => {
        updateNotes();
        setForm({content: ""});
      });
  };

  return (
    <form onSubmit={handleAddNote} className='form'>
      <p><b>New Note:</b></p>
      <p><textarea rows="6" cols="30" name="content"  onChange={handleFormChange}  value={form.content}/>

     </p>
      <p><input type="submit" value="Добавить" /></p>
    </form>
  );
}

AddNote.propTypes = {
  updateNotes: PropTypes.func
}
