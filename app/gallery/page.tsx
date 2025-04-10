"use client";

import GallerySectionBento from "@/components/content/gallery-section-bento";
import GallerySectionMasonry from "@/components/content/gallery-section-masonry";
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

			<Bounded className="mb-18 space-y-10 px">
				<h1 className="mt-18 mb-8 text-5xl font-black">Our Gallery</h1>

				<GallerySectionMasonry
					title="News"
					images={Array.from({ length: 12 }, (_, i) => i).map(
						(i) => `/news/(${i}).png`
					)}
				/>
				<GallerySectionBento
					title="Independence Day"
					images={{
						3: "/independence/(0).jpg",
						1: "/independence/(1).jpg",
						2: "/independence/(2).jpg",
						0: "/independence/(3).jpg",
						4: "/independence/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/1ATbiQcQth/"
				/>
				<GallerySectionBento
					title="Farewell"
					images={{
						0: "/farewell/(0).jpg",
						1: "/farewell/(1).jpg",
						2: "/farewell/(2).jpg",
						3: "/farewell/(3).jpg",
						4: "/farewell/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/16Kfrgg8Bz/"
				/>
				<GallerySectionBento
					title="Children's Day"
					images={{
						0: "/childrens/(0).jpg",
						1: "/childrens/(1).jpg",
						2: "/childrens/(2).jpg",
						3: "/childrens/(3).jpg",
						4: "/childrens/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/14wD2LJfqp/"
				/>
				<GallerySectionBento
					title="Election Day"
					images={{
						0: "/elections/(0).jpg",
						1: "/elections/(1).jpg",
						2: "/elections/(2).jpg",
						3: "/elections/(3).jpg",
						4: "/elections/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/1AAThAWyHs/"
				/>
				<GallerySectionBento
					title="Children's Day"
					images={{
						0: "/childrens/(0).jpg",
						1: "/childrens/(1).jpg",
						2: "/childrens/(2).jpg",
						3: "/childrens/(3).jpg",
						4: "/childrens/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/14wD2LJfqp/"
				/>
				<GallerySectionBento
					title="Free Medical Check-up"
					images={{
						0: "/medical/(0).jpg",
						1: "/medical/(1).jpg",
						2: "/medical/(2).jpg",
						3: "/medical/(3).jpg",
						4: "/medical/(4).jpg",
					}}
					url="https://www.facebook.com/share/p/15NzyMgNTf/"
				/>
			</Bounded>
		</main>
	);
}

export default Gallery;
