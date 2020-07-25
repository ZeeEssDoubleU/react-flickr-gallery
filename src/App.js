import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
// import components
import Page from "./components/Page.js";
import PageNotFound from "./components/PageNotFound.js";
import Nav from "./components/Nav";
// import styles
import ResetStyles from "./styles/reset";
import GlobalStyles from "./styles/global";
// import store
import useStore from "./store//useStore.js";

// App fetches data and displays photos from the Flickr API.  Data fetched is defined by input from a search field, url parameters or from clicking predefined navigation buttons.
export default function App(props) {
	const { state } = useStore();
	const routeItems = state.routes.map((item) => (
		<Route key={item} path={`/${item}`}>
			<Page title={item} />
		</Route>
	));

	return (
		<>
			<ResetStyles />
			<GlobalStyles />
			<Grid>
				<Nav />
				<Main>
					<Switch>
						<Route exact path="/">
							<Page title="Home" />
						</Route>
						<Route path="/search/:term">
							<Page title="Search" />
						</Route>
						{routeItems}
						<Route>
							<PageNotFound />
						</Route>
					</Switch>
				</Main>
			</Grid>
		</>
	);
}

// *************
// styles
// *************

const Grid = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	height: 100vh;
	width: 100%;
`;
const Main = styled.main`
	overflow: scroll;
`;
