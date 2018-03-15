import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoContainer = props => {

  const results = props.data.photos;

  let photos = results.map(photo =>
    <Photo
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      title={photo.title}
      key={photo.id} />
  );

  return (
    <div className="photo-container">
      {
        (props.data.loading)
          ? <h2>Loading...</h2>
          : <div>
            <h2>{props.data.submittedSearchText}</h2>
            <ul>
              {
                (results.length > 0)
                  ? photos
                  : <NoPhotos />
              }
            </ul>
          </div>
      }
    </div>
  );
}

PhotoContainer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotoContainer;
