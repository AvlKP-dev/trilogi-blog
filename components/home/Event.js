import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import trim from "../../lib/trim";

const Event = ({ event }) => {
	console.log(event.cover);
	const trimmedBody = trim(event.content, 360);

	return (
		<StyledContainer>
			<h2>Acara Mendatang</h2>
			<StyledEvent>
				<EventDetails>
					<h3>{event.title}</h3>
					<p>{trimmedBody}</p>
					<Link href={`/${event.slug}`} passHref>
						<Button>Lebih Lanjut</Button>
					</Link>
				</EventDetails>
				<ImageContainer>
					<Image
						src={event.cover}
						layout="fill"
						objectFit="contain"
						objectPosition="center"
					/>
				</ImageContainer>
			</StyledEvent>
		</StyledContainer>
	);
};

const EventDetails = styled.div`
	display: flex;
	flex-flow: column;
	flex: 0 0 42ch;
	margin-right: 14ch;
	justify-content: center;

	p {
		margin: 0;
	}

	a {
		margin-top: 1.25rem;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 76%;
	margin: 5.25rem auto;

	h2 {
		text-align: end;
	}
`;

const ImageContainer = styled.div`
	width: 640px;
	height: 360px;
	position: relative;
	flex: 0 0 640px;
	background: #c4c4c4;
`;

const StyledEvent = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.a`
	display: inline-flex;
	font-size: 1.25rem;
	width: 15ch;
	height: 3.2rem;
	border-radius: 10px;
	background: #c4c4c4;
	border: none;
	justify-content: center;
	align-items: center;

	& + & {
		margin-left: 3ch;
	}
`;

export default Event;
