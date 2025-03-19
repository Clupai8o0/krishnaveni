import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import FloatingNavbar from "@/components/navigation/float-nav";
import CTA from "@/components/content/cta";

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
				<Navbar />
				<FloatingNavbar />
				{children}
				<CTA />
				<Footer />
			</body>
		</html>
	);
}
