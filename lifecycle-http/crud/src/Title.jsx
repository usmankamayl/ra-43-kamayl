import PropTypes from "prop-types";

export const Title = ({updateNotes}) => {
  return(
    <>
      <div className="title">
        <h1>Notes</h1>
        <button className="btn-update" onClick={updateNotes}/>
      </div>
    </>

  )
}

Title.propTypes = {
  updateNotes: PropTypes.func
}
