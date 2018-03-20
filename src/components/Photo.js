import React from 'react';
import PropTypes from 'prop-types';

// Photo component where each photo is rendered using data passed through props from PhotoContainer component.
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
