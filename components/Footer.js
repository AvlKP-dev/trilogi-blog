import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
	return (
		<StyledFooter>
			<LogoImage></LogoImage>
			<StyledContainer as="nav">
				<div>
					<ContainerHead>Informasi</ContainerHead>
					<div>
						<Item>
							<Icon></Icon>Jl. Belitung No. 8 Bandung
						</Item>
						<Item>
							<Icon></Icon>trilogi@gmail.com
						</Item>
						<Item>
							<Icon></Icon>081223862080
						</Item>
					</div>
				</div>
				<nav>
					<ContainerHead>Menu</ContainerHead>
					<FlexContainer>
						<Container>
							<Link href="/home" passHref>
								<Item as="a">Home</Item>
							</Link>
							<Link href="/profile" passHref>
								<Item as="a">Profile</Item>
							</Link>
							<Link href="/activity" passHref>
								<Item as="a">Activity</Item>
							</Link>
						</Container>
						<Container>
							<Link href="/division" passHref>
								<Item as="a">Division</Item>
							</Link>
							<Link href="/contact" passHref>
								<Item as="a">Contact</Item>
							</Link>
						</Container>
					</FlexContainer>
				</nav>
				<nav>
					<ContainerHead>Ikuti Kami</ContainerHead>
					<Item>
						<SocialIcon></SocialIcon>
						<SocialIcon></SocialIcon>
						<SocialIcon></SocialIcon>
					</Item>
				</nav>
			</StyledContainer>
		</StyledFooter>
	);
};

export default Footer;

const Circle = styled.div`
	border-radius: 50%;
	background-color: #a6a6a6;
	margin-right: 1ch;
`;

const FlexContainer = styled.div`
	display: flex;
`;

const StyledFooter = styled(FlexContainer)`
	justify-content: center;
	align-items: center;
	background-color: #c4c4c4;
	height: 18rem;
`;

const LogoImage = styled(Circle)`
	background-color: #e5e5e5;
	width: 160px;
	height: 160px;
	margin-right: 5ch;
`;

const StyledContainer = styled(FlexContainer)`
	width: 56%;
	justify-content: space-between;
`;

const Container = styled.div`
	& + & {
		margin-left: 1.5ch;
	}
`;

const ContainerHead = styled.div`
	font-weight: 500;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const Item = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 0.75rem;
`;

const Icon = styled(Circle)`
	width: 24px;
	height: 24px;
`;

const SocialIcon = styled(Circle)`
	width: 48px;
	height: 48px;
	margin: 0;

	& + & {
		margin-left: 2ch;
	}
`;
