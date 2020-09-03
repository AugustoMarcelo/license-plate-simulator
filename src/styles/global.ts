import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-text-base: #222;
    --color-vw-white: #fff;
    --color-vw-blue: #022358;
    --color-honda-red: #CC0000;
    --color-honda-white: #FFFFFF;

    --color-line-in-white: #E6E6F0;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  body {
    background: #f2f2f2;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  body, input, button {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  .container {
    width: 90vw;
    max-width: 700px;
    padding-bottom: 1rem;
  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
