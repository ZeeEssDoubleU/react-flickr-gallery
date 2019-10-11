import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import SearchForm from "./SearchForm.js";
import MainNav from "./MainNav.js";
import PhotoContainer from "./PhotoContainer.js";

// Page class stores all app state, functions and houses all app sub components.
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			loading: true,
			searchText: "",
			submittedSearchText: "",
		};
	}

	// Lifecycle function that fetches and loads image results as soon as page renders.  This triggers when the page first loads and when refreshing the page through the browser.
	componentDidMount() {
		if (this.props.title === "Home") {
			this.performSearch("grumpy cat", process.env.REACT_APP_FLICKR_API_KEY);
		} else if (this.props.title === "Search") {
			this.performSearch(
				this.props.match.params.term,
				process.env.REACT_APP_FLICKR_API_KEY,
			);
		} else {
			this.performSearch(
				this.props.title,
				process.env.REACT_APP_FLICKR_API_KEY,
			);
		}
	}

	// Lifecycle function that fetches and loads image results whenever the page renders due to a url change.  This function also sets the loading state to true, which shows a loading indicator on the screen while images are being fetched.
	componentWillReceiveProps(nextProps) {
		this.setState({ loading: true });

		if (nextProps.title === "Home") {
			this.performSearch("grumpy cat", process.env.REACT_APP_FLICKR_API_KEY);
		} else if (nextProps.title === "Search") {
			this.performSearch(
				nextProps.match.params.term,
				process.env.REACT_APP_FLICKR_API_KEY,
			);
		} else {
			this.performSearch(
				nextProps.title,
				process.env.REACT_APP_FLICKR_API_KEY,
			);
		}
	}

	// Function fetches and loads photos based on search parameters.  Takes unique apiKay and returns 32 results.
	performSearch = (query, apiKey) => {
		axios
			.get(
				`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=32&format=json&nojsoncallback=1`,
			)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo, // Result data fetched from the Flickr API
					loading: false,
					submittedSearchText: query,
				});
			})
			.catch(error => {
				console.log(
					"Critical system error.  Self destruct sequence initiated.  Abort!  Abort!",
					error,
				);
			});
	};

	// Function that records changes in the search field text.  Triggers everytime a key is pressed in the search field.
	onSearchChange = event => {
		this.setState({ searchText: event.target.value });
	};

	// Function that handles the search field submit event.  Triggers the performSearch function and resets the search field's text.  Also pushes any searches into the browser history.
	handleSubmit = event => {
		event.preventDefault();
		let path = `/search/${this.state.searchText}`;
		event.target.reset();
		this.setState({ searchText: "" });
		this.props.history.push(path);
	};

	render() {
		console.log("State: ", this.state);

		return (
			<div className="container">
				<SearchForm
					performSearch={this.performSearch}
					onSearchChange={this.onSearchChange}
					handleSubmit={this.handleSubmit}
				/>
				<MainNav />
				<PhotoContainer data={this.state} />
			</div>
		);
	}
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
};

export default withRouter(Page);
