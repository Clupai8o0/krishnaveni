import { Content } from "@prismicio/client";
import Link from "next/link";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { generateKey } from "@/lib/utils";

type NavbarProps = {
	links: Content.GlobalNavDocument;
};

//todo: sidebar
const Navbar = ({ links }: NavbarProps) => {
	return (
		<nav className="flex justify-between items-center py-8 text-white">
			<div className="flex">
				<Link href="/">
					<img
						src="/logo-white.png"
						alt="Krishnaveni in full caps text logo"
						className="w-48"
					/>
				</Link>

				{/* //* Links */}
				<ul className="flex">
					{links.data.nav_links.map((link) => (
						<li key={generateKey()}>
							<Link href={link.nav_link.url}>{link.nav_link.text}</Link>
						</li>
					))}
				</ul>
			</div>

			{/* //* CTA */}
			<div>
				<ul className="flex">
					{links.data.cta_links.map((link) => (
						<li key={generateKey()}>
							<Link href={link.cta_link.url}>{link.cta_link.text}</Link>
						</li>
					))}
				</ul>
			</div>

			{/* //* Sidebar */}
			<Sheet>
				<SheetTrigger className="md:hidden">
					<Menu />
				</SheetTrigger>
				<SheetContent className="flex flex-col items-start">
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
					</SheetHeader>

					<ul>
						{links.data.nav_links.map((link) => (
							<li key={generateKey()}>
								<Link href={link.nav_link.url}>{link.nav_link.text}</Link>
							</li>
						))}
					</ul>

					<ul>
						{links.data.cta_links.map((link) => (
							<li key={generateKey()}>
								<Link href={link.cta_link.url}>{link.cta_link.text}</Link>
							</li>
						))}
					</ul>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default Navbar;
