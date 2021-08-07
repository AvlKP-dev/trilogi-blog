import Head from "next/head";
import styled from "styled-components";
import Hero from "../components/home/Hero";
import Event from "../components/home/Event";
import getPageData from "../lib/getPageData";
import getPosts from "../lib/getPosts";

const Home = ({ hero, eventSerialized }) => {
	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<div>
				<Hero content={hero} />
				<Event event={eventSerialized} />
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const hero = getPageData("home.yml");
	const events = getPosts("event");

	const currentDate = new Date();
	const event = events.filter((event) => event.date.start > currentDate)[0];
	const eventSerialized = JSON.parse(JSON.stringify(event));

	return {
		props: {
			hero,
			eventSerialized,
		},
	};
};

export default Home;
