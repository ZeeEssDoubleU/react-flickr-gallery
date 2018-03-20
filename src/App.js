import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Page from './components/Page.js';
import PageNotFound from './components/PageNotFound.js'


// App fetches data and displays photos from the Flickr API.  Data fetched is defined by input from a search field, url parameters or from clicking predefined navigation buttons.
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route exact path='/' render={ () => <Page title='Home' /> } />
        <Route path='/search/:term' render={ () => <Page title='Search' /> } />
        <Route path='/cats' render={ () => <Page title='Cats' /> } />
        <Route path='/dogs' render={ () => <Page title='Dogs' /> } />
        <Route path='/falafels' render={ () => <Page title='Falafels' /> } />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
