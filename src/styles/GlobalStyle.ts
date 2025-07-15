import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 /* Webkit */
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.5);
    border-radius: 4px;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.5) transparent;
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  }
`;
