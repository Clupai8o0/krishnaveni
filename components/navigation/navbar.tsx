import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";
import { cn, generateKey } from "@/lib/utils";
import { Menu } from "lucide-react";
import { footerLinks, navLinks } from "@/lib/links";
import Sidebar from "./sidebar";

function Navbar() {
	return (
		<header className="absolute top-0 left-0 z-50 w-full px">
			<Bounded>
				<nav className="flex justify-between items-center py-8 text-white">
					<div className="flex items-center">
						<Link href="/">
							<img
								src="/logo-white.png"
								alt="Krishnaveni in full caps text logo"
								className="w-48"
							/>
						</Link>

						<ul className="hidden md:flex gap-6 ml-12  items-center">
							{navLinks.nav_links.map(({ url, text }) => (
								<li key={generateKey()}>
									<Link
										href={url}
										className="opacity-80 font-medium text-lg hover:opacity-100 transition duration-300"
									>
										{text}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<ul className="hidden md:flex gap-6 items-center">
						{navLinks.cta_links.map(({ url, text, type }) => (
							<li key={generateKey()}>
								{type === "primary" ? (
									<Link
										href="/apply"
										className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 bg-blue-600 text-white capitalize rounded-full font-medium hover:scale-105 focus:scale-95 transition-all duration-200"
									>
										Apply
									</Link>
								) : (
									<Link
										href={url}
										className="opacity-80 font-medium text-lg hover:opacity-100 transition duration-300"
									>
										{text}
									</Link>
								)}
							</li>
						))}
					</ul>

					<Sidebar />
				</nav>
			</Bounded>
		</header>
	);
}

export default Navbar;
