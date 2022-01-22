import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body {

    }

    :root {
            --black-shade-1 : #000000;
            --white-shade-1 : #ffffff;
            --border-shade-1 : #535A5F;
        
        }

`;
