import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
	display: flex;
	position: fixed;
	left: 0;
	width: 100vw;
	justify-content: center;

	top: 0;
	height: 100%;
	align-content: center;
	background-image: url(/assets/images/pngs/SoukBackground.png);
	background-size: cover;
	background-repeat: no-repeat;
	overflow-y: overlay;
	@media (max-width: 768px) {
		background-image: url(/assets/images/pngs/SoukBackgroundMobile.png);
	}
`;

export const Content = styled.div`
	height: 100vh;

	display: flex;

	align-items: center;
	flex-direction: column;
`;
export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: fit-content;
	position: fixed;
	top: 279px;
	gap: 24px;

	@media (max-width: 768px) {
		gap: 8px;
	}
`;
//Heading ⬇⬇
export const Header = styled.div`
	width: 47.875rem;
	height: 11rem;
	h1 {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-size: 72px;
		line-height: 88px;
		text-align: center;
		letter-spacing: -0.02em;
	}
    @media (max-width: 768px) {
        width: 330px;
        height: 87px;

        h1 {
        font-size: 32px;
        line-height: 122.5%;
        }


       

`;
//Copywriting ⬇⬇
export const Text = styled.div`
	width: 47.875em;
	height: 1.875em;
	margin-top: 18px;

	p {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;

		text-align: center;
		letter-spacing: 0.01em;
	}

	@media (max-width: 768px) {
		width: 327px;
		height: 81px;
		padding: 0 35px;
		margin-top: 0px;
		p {
			font-size: 18px;
			line-height: 27px;
			letter-spacing: 0.01em;
		}
	}
`;

//Coming Soon Text at bottom of screen ⬇⬇
export const ComingSoonText = styled.div`
	display: flex;
	position: fixed;
	justify-content: center;
	width: 370px;
	height: 48px;
	top: 772px;

	h2 {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 48px;
	}
	@media (max-width: 768px) {
		h2 {
			font-size: 20px;
			top: 702px;
		}
	}
`;

//Button Wrapper ⬇⬇
export const BtnGradient = styled.div`
	background: linear-gradient(transparent, transparent) padding-box,
		linear-gradient(90deg, #7f66fd, #56ccf2) border-box;

	border-style: solid;
	border-color: transparent;
	border-radius: 35px;
	@media (max-width: 768px) {
		margin-top: 24px;
	}
`;

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 35px;
	width: 181.88px;
	height: 54px;
	background: #080b2a;

	font-size: 20px;
	line-height: 30px;
	&:hover {
		cursor: pointer;
	}
`;

//StarkNet Logo Container ⬇⬇
export const StarkNet = styled(Image)`
	width: 120px;
	height: 24px;
	margin-top: 4px;
	@media (max-width: 768px) {
		margin-top: 12px;
	}
`;
//Arrow Icon Container ⬇⬇
export const ArrowIcon = styled(Image)`
	width: 29.88px;
	height: 36px;
	padding: 10px;
	gap: 10px;
`;
//Souk Logo Container ⬇⬇
export const SoukLogo = styled(Image)`
	position: fixed;
	top: 134px;

	width: 300px;
	height: 110px;
	@media (max-width: 768px) {
		top: 75px;
		width: 224px;
		height: 82px;
	}
`;
