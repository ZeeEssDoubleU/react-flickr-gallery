import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
   html, body {
      text-align: center;
      color: #3f4850;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
         "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
         "Helvetica Neue", sans-serif;


      /* handles scroll behavior when app menu is open */
      overflow-x: hidden;
      overflow-y: ${(props) =>
			props.menuExpanded || props.modal ? "hidden" : "auto"};
      &.using-mouse :focus {
         outline: none !important;
      }
   }

   ul, ol {
      list-style-type: none;
      padding: 0;
   }
`;
