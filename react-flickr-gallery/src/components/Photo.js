import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => {
  return (
    <li>
      <img src={props.url} alt={props.title}/>
    </li>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Photo;
