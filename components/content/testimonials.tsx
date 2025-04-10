"use client";

import React from "react";
import Bounded from "../layouts/bounded";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { AnimatedTestimonials } from "./animated-testimonials";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import { generateKey } from "@/lib/utils";

const testimonials = [
	{
		quote:
			"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
		name: "Sarah Chen",
		designation: "Product Manager at TechFlow",
		src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		quote:
			"Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
		name: "Michael Rodriguez",
		designation: "CTO at InnovateSphere",
		src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		quote:
			"This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
		name: "Emily Watson",
		designation: "Operations Director at CloudScale",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		quote:
			"Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
		name: "James Kim",
		designation: "Engineering Lead at DataPro",
		src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		quote:
			"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
		name: "Lisa Thompson",
		designation: "VP of Technology at FutureNet",
		src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

function Testimonials() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="w-full mt-18 pt-10 pb-20 px">
			<Bounded>
				<h1 className="text-4xl text-center font-black">Why Choose Us?</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
					{[
						{ name: "Sharon Pappala", position: "Student" },
						{ name: "Abinya", position: "Student" },
						{ name: "Priya Jha", position: "Teacher" },
						{ name: "Yamuna", position: "Parent" },
					].map(({ name, position }, i) => (
						<div className="flex flex-col">
							<HeroVideoDialog
								className="block h-full object-cover"
								animationStyle="from-center"
								key={generateKey()}
								videoSrc={`/testimonials/(${i}).mp4`}
								thumbnailSrc={`/testimonials/(${i}).png`}
							/>
							<div className="mt-2">
								<p className="text-xl font-bold">{name}</p>
								<span className="text-slate-400">{position}</span>
							</div>
						</div>
					))}
				</div>
			</Bounded>
		</div>
	);
}

export default Testimonials;
