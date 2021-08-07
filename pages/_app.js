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

	h1, h2 {
		font-size: 3rem;
		font-weight: 600;
	}

	h2 {
		margin-bottom: 5.25rem;
		margin-top: 0;
    text-align: center;
	}

	h3 {
		font-size: 3rem;
		font-weight: 500;
		margin-top: 0;
		margin-bottom: 1.5rem;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 500;
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
