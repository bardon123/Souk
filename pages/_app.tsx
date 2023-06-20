import { GlobalStyle } from "@/styles/App.styles";
import { SoukTheme } from "@/types/appTheme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{ SoukTheme }}>
			<GlobalStyle theme={SoukTheme} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
