import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";
import { cn, generateKey } from "@/lib/utils";
import { Menu } from "lucide-react";
import { footerLinks, navLinks } from "@/lib/links";
import Sidebar from "./sidebar";

function Navbar() {
	return (
		<header className="absolute top-0 left-0 w-full z-50 px">
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

						{/* //* Links */}
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

					{/* //* CTA */}
					<ul className="hidden md:flex gap-6 items-center">
						{navLinks.cta_links.map(({ url, text, type }) => (
							<li key={generateKey()}>
								<Link
									href={url}
									className={cn(
										"opacity-80 font-medium text-lg hover:opacity-100 transition-all duration-200 hover:scale-105 focus:scale-95",
										type === "primary" &&
											"bg-blue-600 text-white px-10 py-3 rounded-full opacity-100 "
									)}
								>
									{text}
								</Link>
							</li>
						))}
					</ul>

					{/* //* Sidebar */}
					<Sidebar />
				</nav>
			</Bounded>
		</header>
	);
}

export default Navbar;
