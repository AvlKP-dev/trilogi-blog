import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/layout";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Asap', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const theme = {};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
