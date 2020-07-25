// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react";

// reducer
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return { ...state, ...action.payload };
		case "CHANGE_SEARCH_TEXT":
			return { ...state, ...action.payload };
		case "PERFORM_SEARCH":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

// initial state
const initState =
	typeof window !== "undefined"
		? {
				photos: [],
				loading: true,
				searchText: "",
				submittedSearchText: "",
				routes: ["cats", "dogs", "falafels"],
		  }
		: {}; // fallback to {} so that sub states don't return null

// context that stores and shares data
const StoreContext = createContext(initState);

// component to wrap upper level root component with Provider
export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

// useStore hook.  Acts as Consumer through useContext
export default function useStore() {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
}
