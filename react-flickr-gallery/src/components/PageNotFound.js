import React from 'react';

// 404 error page.  Renders when browser url does not match any of the app route paths.
const PageNotFound = props => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>It appears this page does not exist or has succumbed to the void, ceasing to exist.  Please enter a valid URL or go back in your browser.</p>
    </div>
  );
}

export default PageNotFound;
