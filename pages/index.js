import Head from "next/head";
import styled from "styled-components";
import Hero from "../components/home/Hero";
import getPageData from "../lib/getPageData";

const Home = ({ data }) => {
	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<div>
				<Hero content={data} />
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const data = getPageData("home.yml");

	return {
		props: {
			data,
		},
	};
};

export default Home;
