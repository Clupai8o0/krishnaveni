import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";
import { Facebook, Mail } from "lucide-react";
import { generateKey } from "@/lib/utils";
import { footerLinks, navLinks } from "@/lib/links";

function Footer() {
	return (
		<footer className="bg-gray-900 py-12 md:py-18 w-full px">
			<Bounded>
				<div className="md:flex md:items-center xl:items-start md:justify-between">
					<Link href="/" className="flex items-start mb-4 sm:mb-0">
						<img
							src="/logo-white.png"
							alt="Krishnaveni in full caps text logo"
							className="w-48"
						/>

						{/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-4 font-serif">
							NMMUN
						</span> */}
					</Link>

					<div className="flex flex-col md:flex-row gap-y-3 xl:gap-y-0 gap-x-4 xl:gap-x-12 text-white mt-6 md:mt-0 xl:mt-4">
						{footerLinks.map((link) => (
							<div className="flex flex-col" key={generateKey()}>
								<Link
									href={link.url}
									title={link.text}
									className="xl:font-semibold opacity-80 hover:opacity-100 xl:opacity-100 xl:hover:opacity-60 hover:underline uppercase xl:mb-6"
								>
									{link.text}
								</Link>
							</div>
						))}
					</div>
				</div>

				<hr className="my-6 border-gray-500 sm:mx-auto xl:my-8" />

				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2025 Krishnaveni™. All Rights Reserved.
					</span>

					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a
							href="https://www.instagram.com/nmmun_24/"
							className="text-gray-300 hover:text-white"
						>
							<Facebook className="w-6 h-6" />
							<span className="sr-only">Facebook Page</span>
						</a>
						<a
							href="mailto:nmmun2024.25@gmail.com"
							className="text-gray-300 hover:text-white"
						>
							<Mail className="w-6 h-6" />
							<span className="sr-only">Email Link</span>
						</a>
					</div>
				</div>
			</Bounded>
		</footer>
	);
}

export default Footer;
