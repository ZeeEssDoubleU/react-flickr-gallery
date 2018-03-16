import React from 'react';

// NoPhoto component displays if no results are returned from search parameters.
const NoPhoto = props => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>The internet, despite all its wisdom and glory, is unable to find what you're looking for. Please search again.</p>
    </li>
  );
}

export default NoPhoto;
