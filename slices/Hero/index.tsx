"use client";

import { FC, useRef, useState } from "react";
import { Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { generateKey } from "@/lib/utils";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	const [title, settitle] = useState(slice.primary.carousel_content[0]?.title);
	const [body, setbody] = useState(slice.primary.carousel_content[0]?.body);
	const [call_to_action, setcall_to_action] = useState(
		slice.primary.carousel_content[0]?.call_to_action
	);
	const [learn_more, setlearn_more] = useState(
		slice.primary.carousel_content[0]?.learn_more
	);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Carousel plugins={[plugin.current]} className="w-full h-screen bg-black relative">
				<CarouselContent>
					{slice.primary.carousel_content.map((item) => (
						<CarouselItem key={generateKey()}>
							<PrismicNextImage
								field={item.background_image}
								className="w-full h-screen object-cover opacity-40"
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px text-white">
					<div className="max-w-2xl overflow-hidden w-full flex flex-col gap-4 items-center">
						<h1 className="text-6xl font-extrabold text-white text-balance">
							<PrismicText field={title} />
						</h1>
						<div className="text-base text-balance text-gray-300">
							<PrismicRichText field={body} />
						</div>
						<div className="flex gap-4 mt-4">
							<PrismicNextLink
								field={call_to_action}
								className="flex items-center justify-center px-8 py-2 bg-white text-black capitalize rounded-md font-medium"
							/>
							<PrismicNextLink
								field={learn_more}
								className="flex items-center justify-center px-8 py-2 text-white bg-transparent border border-white capitalize rounded-md font-medium"
							/>
						</div>
					</div>
				</div>
			</Carousel>
		</section>
	);
};

export default Hero;
