import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";
import { cn, generateKey } from "@/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { footerLinks, navLinks } from "@/lib/links";

function Navbar() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 px">
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
										"opacity-80 font-medium text-lg hover:opacity-100 transition duration-300",
										type === "primary" &&
											"bg-[#3650AD] text-white px-10 py-3 rounded-full opacity-100 hover:scale-105"
									)}
								>
									{text}
								</Link>
							</li>
						))}
					</ul>

					{/* //* Sidebar */}
					<Sheet>
						<SheetTrigger className="md:hidden">
							<Menu className="w-8 h-8" />
						</SheetTrigger>
						<SheetContent className="flex flex-col items-start bg-[#3650AD] border-none">
							<SheetHeader className="pt-24 px-10">
								<img src="/logo-white.png" alt="krishnaveni text logo" />
							</SheetHeader>

							<div className="px-9 flex items-center h-[60vh]">
								<ul className="flex flex-col gap-8">
									{footerLinks.map(({ url, text }) => (
										<li key={generateKey()}>
											<Link
												href={url}
												className="text-white uppercase text-5xl font-light opacity-80 hover:font-semibold hover:opacity-100 transition-all duration-300"
											>
												{text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</Bounded>
		</header>
	);
}

export default Navbar;
