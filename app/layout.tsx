import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import FloatingNavbar from "@/components/navigation/float-nav";
import CTA from "@/components/content/cta";
import NextTopLoader from "nextjs-toploader";

const sans = Nunito({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Krishnaveni School",
	description: "Krishnaveni School, Peerzadiguda, Hyderabad",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${sans.variable} antialiased`}>
				<NextTopLoader
					color="oklch(0.546 0.245 262.881)"
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="inset 20px 20px 60px #c0b2ac, inset -20px -20px 60px #fff0e8"
				/>
				<Navbar />
				<FloatingNavbar />
				{children}
				<CTA />
				<Footer />
			</body>
		</html>
	);
}
