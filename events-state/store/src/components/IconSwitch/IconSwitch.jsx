import style from './IconSwitch.module.css';
import PropTypes from 'prop-types';

export const IconSwitch = ({icon, onSwitch}) => {

  return (
    <button className="material-icons btn-icon" onClick={onSwitch}>
      {icon}
    </button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}
