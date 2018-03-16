import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

// Component that houses all photos on the app page.
const PhotoContainer = props => {

  // Result data passed down through props and stored in variable.  Originates from Page.js.
  const results = props.data.photos;

  // Maps through results to assign data to each Photo component.  Assigns all Photo components to a variable to be displayed in PhotoContainer.
  let photos = results.map(photo =>
    <Photo
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      title={photo.title}
      key={photo.id} />
  );

  return (
    <div className="photo-container">
      {
        (props.data.loading)  // If loading state is TRUE, display "Loading...".  If loading state is FALSE, display photos.
          ? <h2>Loading...</h2>
          : <div>
            <h2>{props.data.submittedSearchText}</h2>
            <ul>
              {
                (results.length > 0)
                  ? photos
                  : <NoPhotos />  // NoPhotos component is displayed if there are no results returned.
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
