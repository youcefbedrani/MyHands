import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./global.css";

import Providers from "./providers";
import { Footer, Navbar } from "@/components";

const opensans = Open_Sans({ subsets: ["latin"] });

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Bedrani Mohammed Adel | Software Developer",
	description:
		"I'm a fullstack software developer specializing in web and mobile app development. See my projects and expertise here.",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${opensans.className} ${montserrat.variable} bg-white`}
			>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
