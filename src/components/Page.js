import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components/macro";
// import components
import Photos from "./Photos.js";
// import store
import useStore from "../store/useStore";

// Page class stores all app state, functions and houses all app sub components.
export default function Page(props) {
	const { dispatch } = useStore();
	const params = useParams();

	useEffect(() => {
		dispatch({
			type: "SET_LOADING",
			payload: { loading: true },
		});

		// Function fetches and loads photos based on search parameters.  Takes unique apiKay and returns 32 results.
		const performSearch = async (query, apiKey) => {
			try {
				const response = await axios.get(
					`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=32&format=json&nojsoncallback=1`,
				);

				dispatch({
					type: "PERFORM_SEARCH",
					payload: {
						photos: response.data.photos.photo, // Result data fetched from the Flickr API
						loading: false,
						submittedSearchText: query,
					},
				});
			} catch (error) {
				console.error(
					"Critical system error.  Self destruct sequence initiated.  Abort!  Abort!",
					error,
				);
			}
		};

		// conditionally perform search
		if (props.title === "Home") {
			performSearch("grumpy cat", process.env.REACT_APP_FLICKR_API_KEY);
		} else if (props.title === "Search") {
			performSearch(params.term, process.env.REACT_APP_FLICKR_API_KEY);
		} else {
			performSearch(props.title, process.env.REACT_APP_FLICKR_API_KEY);
		}
	}, [dispatch, params.term, props.title]);

	return (
		<Container>
			<Photos />
		</Container>
	);
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
};

// *************
// styles
// *************

const Container = styled.div`
	@media (min-width: 768px) {
		max-width: 960px;
		margin: auto;
	}
`;
