"use client";

import Link from "next/link";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { navLinks } from "@/lib/links";
import { animationVariants } from "@/lib/animations";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";

const FloatingNavbar = () => {
	const [showFloatingNav, setShowFloatingNav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowFloatingNav(true);
			else setShowFloatingNav(false);
		});
	}, []);

	return (
		showFloatingNav && (
			<motion.nav
				className="w-screen flex justify-center z-50 fixed top-4 px"
				variants={animationVariants}
				initial="fromTop"
				animate="visible"
				exit="fromTop"
				transition={{ duration: 0.4 }}
			>
				<div className="max-w-7xl flex items-center justify-between w-full shadow-md rounded-2xl bg-blue-600 transition-all duration-300 text-white px-8 py-8">
					{/* LOGO + COUNTDOWN */}
					<div className="flex items-center">
						<Link href="/">
							<img
								src="/logo-white.png"
								alt="Krishnaveni in full caps text logo"
								className="w-40 md:w-48"
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
								{type === "primary" ? (
									<Link
										href="/apply"
										className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 bg-white text-blue-600 capitalize rounded-full font-semibold hover:scale-105 focus:scale-95 transition-all duration-200"
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

					{/* LINKS - Mobile - SIDEBAR TOGGLE */}
					<Sidebar />
				</div>
			</motion.nav>
		)
	);
};

export default FloatingNavbar;
