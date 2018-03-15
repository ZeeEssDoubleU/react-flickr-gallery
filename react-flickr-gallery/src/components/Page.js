import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import apiKey from '../config.js';
import SearchForm from './SearchForm.js';
import MainNav from './MainNav.js';
import PhotoContainer from './PhotoContainer.js';

class Page extends React.Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchText: '',
      submittedSearchText: '',
    }
  }

  // Load default search results as soon as page renders
  componentDidMount() {
    if (this.props.title === 'Home') {
      this.performSearch('grumpy cat', apiKey);
    } else if (this.props.title === 'Search') {
      this.performSearch(this.props.match.params.term, apiKey)
    } else {
      this.performSearch(this.props.title, apiKey);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });

    if (nextProps.title === 'Home') {
      this.performSearch('grumpy cat', apiKey);
    } else if (nextProps.title === 'Search') {
      this.performSearch(nextProps.match.params.term, apiKey);
    } else {
      this.performSearch(nextProps.title, apiKey);
    }

    console.log('currentProps: ', this.props.title, '     nextProps: ', nextProps.title);
  }

  // Function returns photos based on search parameters.  Takes unique apiKay and returns 16 results.
  performSearch = (query, apiKey) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=32&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          submittedSearchText: query,
        });
      })
      .catch(error => {
        console.log('Critical system error.  Self destruct sequence initiated.  Abort!  Abort!', error);
      });
  }

  // Function that records changes in the search field text.  Triggers everytime a key is pressed in the search field.
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }

  // Function that handles the search field submit event.  Triggers the performSearch function and resets the search field's text.
  handleSubmit = event => {
    event.preventDefault();
    let path = `/search/${this.state.searchText}`;
    event.target.reset();
    this.setState({ searchText: '' });
    this.props.history.push(path);
  }

  render() {
    console.log('State: ', this.state);

    return (
      <div className="container">
        <SearchForm
          performSearch={this.performSearch}
          onSearchChange={this.onSearchChange}
          handleSubmit={this.handleSubmit}
        />
        <MainNav />
        <PhotoContainer data={this.state}/>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withRouter(Page);
