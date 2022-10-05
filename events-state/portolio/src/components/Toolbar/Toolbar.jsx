import React from "react";
import PropTypes from 'prop-types';

const filterButtons = [
  { name: 'All', label: 'All' },
  { name: 'Websites', label: 'Websites' },
  { name: 'Flayers', label: 'Flayers' },
  { name: 'Business Cards', label: 'Business Cards' },
];

const Toolbar = ({filter, onSelectFilter = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name}
              type="button"
              onClick={() => onSelectFilter(name)}
              className={classNames}>{label}</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default Toolbar;

Toolbar.protoTypes = {
  filter: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}
