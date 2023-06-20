export interface Theme<ThemeType> {
	theme: ThemeType;
}
export interface AppTheme {
	name: string;
	primaryColor: string;
	primaryColorHover: string;

	whiteBgColor: string;
	blackText: string;
	whiteText: string;
	background: string;
	backgroundSize: string;
	backgroundRepeat: string;
}
export const SoukTheme = {
	name: "Souk theme",
	primaryColor: "#FF4F0A",
	primaryColorHover: "#fe7641",

	whiteBgColor: "#f7f7f7",
	blackText: "black",
	whiteText: "white",
	background: `url(/assets/images/pngs/BackgroundImage.png)`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};
