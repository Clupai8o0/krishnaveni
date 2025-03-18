"use client";

import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { generateKey } from "@/lib/utils";
import Link from "next/link";

const data = [
	{
		img: {
			src: "/hero-1.jpg",
			alt: "Hero 1",
		},
		title: "Nurturing Young Minds, Building Bright Futures",
		desc: "At Krishnaveni, we provide a strong foundation for lifelong learning with an enriching CBSE curriculum, modern teaching methods, and a nurturing environment for every child.",
	},
	{
		img: {
			src: "/hero-2.jpg",
			alt: "Hero 2",
		},
		title: "A Holistic Approach to Learning",
		desc: "Beyond academics, we encourage creativity, critical thinking, and leadership through sports, arts, and extracurricular activities that shape well-rounded individuals.",
	},
	{
		img: {
			src: "/hero-3.jpg",
			alt: "Hero 3",
		},
		title: "State-of-the-Art Facilities for Future Innovators",
		desc: " Our modern classrooms, well-equipped labs, and digital learning spaces empower students with the tools they need to excel in an evolving world.",
	},
	{
		img: {
			src: "/hero-4.jpg",
			alt: "Hero 4",
		},
		title: "A Safe, Supportive, and Inclusive Community",
		desc: "We prioritize student well-being with a secure campus, dedicated teachers, and a welcoming atmosphere where every child feels valued and inspired.",
	},
];

function Hero() {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	const [title, settitle] = useState(data[0].title);
	const [body, setbody] = useState(data[0].desc);

	return (
		<section>
			<Carousel
				plugins={[plugin.current]}
				className="w-full h-[90vh] bg-black relative"
			>
				<CarouselContent>
					{data.map(({ img: { src, alt } }) => (
						<CarouselItem key={generateKey()}>
							<img
								src={src}
								alt={alt}
								className="w-full h-[90vh] object-cover opacity-40"
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px text-white">
					<div className="max-w-2xl overflow-hidden w-full flex flex-col gap-4 items-center">
						<h1 className="text-6xl font-extrabold text-white text-balance font-sans">
							{title}
						</h1>
						<div className="text-base text-balance text-gray-300">{body}</div>
						<div className="flex gap-4 mt-4">
							<Link
								href="/apply"
								className="flex items-center justify-center px-8 py-2 bg-white text-black capitalize rounded-md font-medium"
							>
								Apply
							</Link>
							<Link
								href="/contact"
								className="flex items-center justify-center px-8 py-2 text-white bg-transparent border border-white capitalize rounded-md font-medium"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</Carousel>
		</section>
	);
}

export default Hero;
