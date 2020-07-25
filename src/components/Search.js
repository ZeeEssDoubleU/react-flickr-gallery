import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
// import store
import useStore from "../store/useStore";

// Search field component at the top of the app page.
const Search = (props) => {
	const { state, dispatch } = useStore();
	const history = useHistory();

	// Function that records changes in the search field text.  Triggers everytime a key is pressed in the search field.
	const onSearchChange = (event) => {
		dispatch({
			type: "CHANGE_SEARCH_TEXT",
			payload: event.target.value,
		});
	};

	// Function that handles the search field submit event.  Triggers the performSearch function and resets the search field's text.  Also pushes any searches into the browser history.
	const handleSubmit = (event) => {
		event.preventDefault();
		const path = `/search/${state.searchText}`;

		event.target.reset();
		dispatch({
			type: "CHANGE_SEARCH_TEXT",
			payload: { searchText: "" },
		});

		history.push(path);
	};

	return (
		<Form
			className="search-form"
			onSubmit={handleSubmit} // triggers handleSubmit function in Page.js
		>
			<input //
				onChange={onSearchChange} // triggers onSearchchange function in Page.js
				type="search"
				name="search"
				placeholder="Search"
				required
			/>
			<button type="submit" className="search-button">
				<svg
					fill="#fff"
					height="24"
					viewBox="0 0 23 23"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>
		</Form>
	);
};
export default Search;

// *************
// styles
// *************

const Form = styled.form`
	width: 100%;
	max-width: 30rem;
	display: flex;

	input {
		font-size: 1em;
		width: 100%;
		background-color: #edeff0;
		padding: 0.75rem 1rem;
		border: 3px solid #d7dbdf;
		border-right: none;
		border-radius: 0.35em 0 0 0.35em;
		outline: none;
	}

	button {
		outline: none;
		background-color: #438bbd;
		border: none;
		padding: 0px 1rem;
		border-radius: 0 0.35em 0.35em 0;
		cursor: pointer;

		:hover {
			background-color: #275270;
		}
	}
`;
