import React from "react";
import { NavLink } from "react-router-dom";

// Navigation component below the search componenet on the app page.  Displays 3 NavLink buttons.
const MainNav = props => {
	return (
		<nav className="main-nav">
			<ul>
				<li>
					<NavLink to="/cats">Cats</NavLink>
				</li>
				<li>
					<NavLink to="/dogs">Dogs</NavLink>
				</li>
				<li>
					<NavLink to="/falafels">Falafels</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
