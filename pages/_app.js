import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: rickAndMortyFonts;
  src: url('/get_schwifty.ttf');
}

h1 {
  font-family: rickAndMortyFonts;
  text-shadow: 1px 2px 3px yellow;
  color: ${({ theme }) => theme.colors.fontColor}
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

main {
  background-image: url('/rickAndMortyBackground.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 5rem 1rem;
}
`;

const theme = {
  colors: {
    fontColor: 'rgb(44, 169, 167)',
    default: 'rgb(35, 32, 32)',
  },
  boxShadow: '0px 2px 5px rgba(25, 50, 81, 0.5)',
  fontFamily: '"Josefin Sans", sans-serif',
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
