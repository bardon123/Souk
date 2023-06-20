import {
	ArrowIcon,
	BtnGradient,
	Button,
	ComingSoonText,
	Container,
	Content,
	ContentWrapper,
	Header,
	SoukLogo,
	StarkNet,
	Text,
} from "@/styles/Home.styles";

export default function Home() {
	//Button Link⬇⬇
	const LearnMoreLink = () => {
		window.open(`https://twitter.com/SoukProtocol`);
	};
	return (
		<Container>
			<Content>
				<SoukLogo
					src="/assets/images/svgs/OldSoukLogo.svg"
					alt=""
					width={0}
					height={0}
				/>
				<ContentWrapper>
					<Header>
						<h1>REVOLUTIONIZING CRYPTO COMMERCE</h1>
					</Header>
					<Text>
						<p>
							Powering omni-chain decentralized finance and gaming services
							through
						</p>
					</Text>
					<picture>
						<StarkNet
							src="/assets/images/svgs/StarknetLogo.svg"
							alt=""
							width={0}
							height={0}></StarkNet>
					</picture>
					<BtnGradient>
						<Button onClick={LearnMoreLink}>
							Learn more{" "}
							<ArrowIcon
								src="/assets/images/svgs/ArrowIcon.svg"
								width={0}
								height={0}
								alt=""
							/>{" "}
						</Button>
					</BtnGradient>
				</ContentWrapper>
				<ComingSoonText>
					<h2>COMING SOON TO YOU</h2>
				</ComingSoonText>
			</Content>
		</Container>
	);
}
