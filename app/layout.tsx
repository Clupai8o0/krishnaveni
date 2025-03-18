import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

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
				{children}
				<Footer />
			</body>
		</html>
	);
}
