import styled from "styled-components";
import Link from "next/link";

const Hero = ({ content }) => {
	return (
		<StyledHero background={content.background}>
			<Container>
				<h1>{content.head}</h1>
				<p>{content.body}</p>
				<div>
					<Link href="/activity" passHref>
						<SecondaryButton>Activity</SecondaryButton>
					</Link>
					<Link href="/profile" passHref>
						<Button>Profile</Button>
					</Link>
				</div>
			</Container>
		</StyledHero>
	);
};

const StyledHero = styled.div`
	height: calc(100vh - 64px);
	background: ${(props) => `url(${props.background}) no-repeat center/cover`};
	position: relative;
`;

const Container = styled.div`
	max-width: 50ch;
	position: absolute;
	right: 21ch;
	top: 50%;
	transform: translateY(-50%);
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

const SecondaryButton = styled(Button)`
	background: transparent;
	border: 1px solid black;
`;

export default Hero;
