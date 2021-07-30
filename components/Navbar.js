import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const StyledNavbar = styled.div`
	height: 4em;
	padding: 0 6%;
	background-color: #c4c4c4;
	display: flex;
	position: relative;
	align-items: center;

	.openMenu {
		display: ${({ active }) => (active ? "none" : "block")};
	}

	.closeMenu {
		display: ${({ active }) => (active ? "block" : "none")};
	}

	@media (min-width: 1024px) {
		svg,
		.openMenu,
		.closeMenu {
			display: none;
		}
	}
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	font-weight: 800;
	font-size: 1.5em;
`;

const LogoImage = styled.div`
	display: inline-block;
	border-radius: 50%;
	background-color: #e5e5e5;
	width: 32px;
	height: 32px;
	margin-right: 1ch;
`;

const StyledNav = styled.nav`
	font-size: 1.25em;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${({ active }) => (active ? "100%" : "0")};
	transform: ${({ active }) => (active ? "" : "translateY(-100%)")};
	background-color: #c4c4c4;
	width: 100%;
	left: 0;
	border-top: 1px solid black;

	a {
		border-bottom: 1px solid black;
		text-align: center;
		position: relative;
		padding: 0.75rem 0;
		width: 100%;
	}

	a::before {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0;
		height: 2px;
		background-color: black;
		transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
	}

	a:hover::before {
		left: 0;
		right: auto;
		width: 100%;
	}

	@media (min-width: 1024px) {
		width: auto;
		position: static;
		flex-direction: row;
		border: none;
		transform: none;

		a {
			border: none;
		}

		a + a {
			margin-left: 4ch;
		}
	}
`;

export default function Navbar() {
	const [active, setActive] = useState(false);

	return (
		<StyledNavbar active={active}>
			<Logo>
				<LogoImage></LogoImage>
				<Link href="/">
					<a>TRILOGI</a>
				</Link>
			</Logo>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				onClick={() => setActive(true)}
				className="openMenu"
			>
				<path
					d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
					fill="#1040e2"
				/>
				<path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
			</svg>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				onClick={() => setActive(false)}
				className="closeMenu"
			>
				<path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
			</svg>
			<StyledNav active={active}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/profile">
					<a>Profile</a>
				</Link>
				<Link href="/activity">
					<a>Activity</a>
				</Link>
				<Link href="/division">
					<a>Division</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</StyledNav>
		</StyledNavbar>
	);
}
