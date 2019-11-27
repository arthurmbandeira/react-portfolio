import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700|Montserrat&display=swap');

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.ffMontserrat};
    background-color: ${props => props.theme.bg};
    margin: 0;
    transition: background-color ease .3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .d-flex {
    display: flex;
  }
  .w-auto {
    width: auto;
    flex-grow: 0;
    flex-basis: auto;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .align-items-center {
    align-items: center;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;