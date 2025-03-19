"use client";

import Hero from "@/components/content/hero";
import Bounded from "@/components/layouts/bounded";
import NavbarBg from "@/components/navigation/navbar-bg";
import { generateKey } from "@/lib/utils";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

function Gallery() {
	return (
		<main>
			<NavbarBg />

			<Bounded className="mb-18">
				<h1 className="mt-18 mb-8 text-5xl font-black">Our Gallery</h1>

				<ResponsiveMasonry>
					<Masonry columnsCount={3} gutter="1rem">
						{images.map((image, index) => (
							<img
								key={generateKey()}
								src={image}
								alt=""
								className="object-cover w-full h-auto rounded-lg"
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Bounded>
		</main>
	);
}

export default Gallery;
