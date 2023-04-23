import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  *{
    margin : 0;
    padding: 0;
  }

  #volumeSection__container{
    color: #E7E1CD;
    height: 100vh;
    /* position: relative; */
    ;
  }
  
  
  h2{
    font-size: 3em;
    padding: 20px 20px;
    text-align: center;
  }
  
  figure {
    margin: 0 auto;
    padding-top: 30px;
    text-align: center;
    width: 290px;

  }

  figcaption{
    font-size: x-small;
    font-style: italic;
    text-align: start;

  }


  .superscript{
    font-size: small;
    vertical-align: super;
    ;
  }
  #footer__buttons {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  #footer__buttons__container {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    max-width: 100vw; /* or any desired width */
    margin: 0 auto; /* to center the container horizontally */
  }
`;
