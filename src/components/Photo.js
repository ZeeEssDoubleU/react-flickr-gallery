import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

// Photo component where each photo is rendered using data passed through props from PhotoContainer component.
const Photo = (props) => {
	return (
		<Wrapper>
			<img src={props.url} alt={props.title} />
		</Wrapper>
	);
};

Photo.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Photo;

// *************
// styles
// *************

const Wrapper = styled.li`
	width: 220px;
	height: 165px;
	overflow: hidden;
	margin: 1rem;

	&:hover {
		img {
			transform: scale(1.15);
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;
	}
`;
