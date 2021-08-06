import styled from "styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<LogoImage></LogoImage>
			<StyledNav as="nav">
				<div>
					<NavHead>Informasi</NavHead>
					<div>
						<NavItem>
							<NavIcon></NavIcon>Jl. Belitung No. 8 Bandung
						</NavItem>
						<NavItem>
							<NavIcon></NavIcon>trilogi@gmail.com
						</NavItem>
						<NavItem>
							<NavIcon></NavIcon>081223862080
						</NavItem>
					</div>
				</div>
				<div>
					<NavHead>Menu</NavHead>
					<FlexContainer>
						<NavContainer>
							<NavItem>Home</NavItem>
							<NavItem>Profile</NavItem>
							<NavItem>Activity</NavItem>
						</NavContainer>
						<NavContainer>
							<NavItem>Division</NavItem>
							<NavItem>Contact</NavItem>
						</NavContainer>
					</FlexContainer>
				</div>
				<div>
					<NavHead>Ikuti Kami</NavHead>
					<NavItem>
						<SocialIcon></SocialIcon>
						<SocialIcon></SocialIcon>
						<SocialIcon></SocialIcon>
					</NavItem>
				</div>
			</StyledNav>
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

const StyledNav = styled(FlexContainer)`
	width: 56%;
	justify-content: space-between;
`;

const NavContainer = styled.div`
	& + & {
		margin-left: 1.5ch;
	}
`;

const NavHead = styled.div`
	font-weight: 500;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const NavItem = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 0.75rem;
`;

const NavIcon = styled(Circle)`
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
