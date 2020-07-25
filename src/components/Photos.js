import React from "react";
import styled from "styled-components/macro";
// import components
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";
// import store
import useStore from "../store/useStore";

// Component that houses all photos on the app page.
export default function Photos(props) {
	const { state } = useStore();

	// Maps through results to assign data to each Photo component.  Assigns all Photo components to a variable to be displayed in Photos.
	const photos = state.photos.map((photo) => (
		<Photo
			url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
			title={photo.title}
			key={photo.id}
		/>
	));

	return (
		<List>
			{state.loading ? (
				<></>
			) : state.photos.length > 0 ? (
				photos
			) : (
				<NoPhotos />
			) // NoPhotos component is displayed if there are no results returned.
			}
		</List>
	);
}

// *************
// styles
// *************

const Header = styled.h1`
	text-align: center;
	text-transform: capitalize;
`;
const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
