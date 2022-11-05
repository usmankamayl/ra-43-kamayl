import ApiService from "./ApiService";
import PropTypes from 'prop-types';

export const Note = ({content, id, updateNotes}) => {
  const apiService = new ApiService();
   const handleDelete = async () => {
     await apiService.deleteNote(id).then(() => {
       updateNotes();
     });
   }

  return(
    <div className="note">
      {content}
    <button className="delete" onClick={handleDelete}>x</button>
    </div>
  )
}

Note.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
  updateNotes: PropTypes.func
}
