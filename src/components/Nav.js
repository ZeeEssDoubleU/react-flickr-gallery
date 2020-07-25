import React from "react";
import styled from "styled-components/macro";
// import components
import { NavLink as Link } from "react-router-dom";
import Search from "./Search.js";
// import store
import useStore from "../store/useStore";

// Navigation component below the search componenet on the app page.  Displays 3 NavLink buttons.
const Nav = (props) => {
	const { state } = useStore();
	const navItems = state.routes.map((item) => (
		<li key={item}>
			<NavLink to={`/${item}`}>{item}</NavLink>
		</li>
	));

	return (
		<Container>
			<Search />
			<ul>{navItems}</ul>
			<Header>
				{state.loading ? "Loading..." : state.submittedSearchText}
			</Header>
		</Container>
	);
};

export default Nav;

// *************
// styles
// *************

const Container = styled.nav`
	display: grid;
	grid-template-columns: minmax(0, 30rem);
	justify-content: center;
	padding: 1rem;

	li {
		width: 1fr;
		margin-bottom: 1em;
	}

	a {
		display: block;
		background: #438bbd;
		border-radius: 3px;
		padding: 5px;
		color: #fff;
	}

	@media (min-width: 768px) {
		ul {
			display: flex;
			justify-content: center;
		}
		li {
			margin: 0.75rem;
			width: 100px;
		}
	}
`;

const NavLink = styled(Link)`
	&:hover,
	&.active {
		background-color: #275270;
	}
`;

const Header = styled.h1`
	text-align: center;
	text-transform: capitalize;
	margin: 0;
`;
