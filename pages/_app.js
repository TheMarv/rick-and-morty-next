import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/layout/layout";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: rickAndMortyFonts;
  src: url('/get_schwifty.ttf');
}


html {
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.fontColor};
}

html,
body {
  margin: 0;
  padding: 0;
}


`;

const theme = {
  colors: {
    fontColor: "rgb(44, 169, 167)",
    default: "rgb(35, 32, 32)",
  },
  boxShadow: "0px 2px 5px rgba(25, 50, 81, 0.5)",
  fontFamily: '"Josefin Sans", sans-serif',
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
