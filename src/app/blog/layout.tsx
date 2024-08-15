import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Juan Daniel Peñaloza Brito | Blog",
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
		<main className="py-28 antialiased">
			{children}
		</main>
	);
}
