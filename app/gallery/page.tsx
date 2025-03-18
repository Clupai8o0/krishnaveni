"use client";

import Hero from "@/components/content/hero";
import { generateKey } from "@/lib/utils";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

function Gallery() {
	return (
		<main>
			<Hero />
			<h1>Our Gallery</h1>
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
		</main>
	);
}

export default Gallery;
