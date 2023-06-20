import { createGlobalStyle } from "styled-components";
import { AppTheme, Theme } from "../types/appTheme";

export const GlobalStyle = createGlobalStyle`
body {
	padding: 0;
	margin: 0;
	font-family: "Patrick Hand";
	background-color: black;
	color: white;
}

a {
	color: inherit;
	text-decoration: none;
}
h1 {
	font-weight: 400;
}
* {
	box-sizing: border-box;
}


`;
