import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: #232323;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.recaptcha-container {
  display: flex;
  justify-content: center;
  margin: 18px 0;
}
.gallery-container {
  .row {
    margin: 0px;
    .container-fluid, .col-md-4, .col-sm-6 {
      padding: 0px
    }
  }
}
`;
