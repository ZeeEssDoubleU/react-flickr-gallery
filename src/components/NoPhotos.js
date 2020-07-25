import React from "react";
import styled from "styled-components/macro";

// NoPhoto component displays if no results are returned from search parameters.
const NoPhoto = (props) => {
	return (
		<Wrapper>
			<h3>No Results Found</h3>
			<p>
				The internet, despite all its wisdom and glory, is unable to find
				what you're looking for. Please search again.
			</p>
		</Wrapper>
	);
};

export default NoPhoto;

// *************
// styles
// *************

const Wrapper = styled.li`
	width: 100%;
`;
