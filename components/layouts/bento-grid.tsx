import React from "react";
import Bounded from "./bounded";
import { cn } from "@/lib/utils";

interface Props {
	title: string;
	className?: string;
	content1: {
		title: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
	};
	content2: {
		title: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
	};
	content3: {
		title: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
	};
	// content4: {
	// 	title: string;
	// 	description: string;
	// 	img: {
	// 		src: string;
	// 		alt: string;
	// 	};
	// };
}

// turn into url
function BentoGrid({
	title,
	className,
	content1,
	content2,
	content3,
	// content4,
}: Props) {
	return (
		<Bounded className={cn("items-center px", className)}>
			<h1 className="text-5xl font-black mb-12">{title}</h1>

			<div className="w-full flex flex-col lg:flex-row gap-6">
				<div className="w-full lg:w-1/2">
					<div className="w-full h-full bg-blue-600 text-white p-12 rounded-4xl">
						<h2 className="font-black text-3xl mb-4">{content1.title}</h2>
						<p className="text-balance opacity-80">{content1.description}</p>
						<img
							src={content1.img.src}
							alt={content1.img.alt}
							className="rounded-2xl mt-8"
						/>
					</div>
				</div>

				<div className="w-full lg:w-1/2 h-full flex flex-col gap-6">
					<div className="flex-1 flex flex-col md:flex-row gap-3 bg-red-600 text-white p-12 rounded-4xl">
						<div className="w-full md:w-1/2">
							<h2 className="text-xl font-black mb-4">{content2.title}</h2>
							<p className="text-balance opacity-80">{content2.description}</p>
						</div>
						<img
							src={content2.img.src}
							alt={content2.img.alt}
							className="w-full md:w-1/2 h-full object-cover rounded-2xl mt-4 md:mt-0"
						/>
					</div>

					<div className="flex-1 flex flex-col md:flex-row gap-3 bg-green-600 text-white p-12 rounded-4xl">
						<div className="w-full md:w-1/2">
							<h2 className="text-xl font-black mb-4">{content3.title}</h2>
							<p className="text-balance opacity-80">{content3.description}</p>
						</div>
						<img
							src={content3.img.src}
							alt={content3.img.alt}
							className="w-full md:w-1/2 h-full object-cover rounded-2xl mt-4 md:mt-0"
						/>
					</div>

					{/* <div className="flex-1 flex md:flex-row flex-col gap-6">
						<div className="w-full flex-1 bg-green-600 text-white rounded-4xl p-12 relative overflow-hidden">
							<img
								src={content3.img.src}
								alt={content3.img.alt}
								className="absolute opacity-20 w-full h-full object-cover top-0 left-0"
							/>
							<div className="relative z-10">
								<h2 className="text-lg font-black text-balance mb-4">{content3.title}</h2>
								<p className="opacity-80 text-balance">{content3.description}</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 flex-1 bg-yellow-600 text-white rounded-4xl p-12 relative overflow-hidden">
							<img
								src={content3.img.src}
								alt={content3.img.alt}
								className="absolute opacity-20 w-full h-full object-cover top-0 left-0"
							/>
							<div className="relative z-10">
								<h2 className="text-lg font-black text-balance mb-4">{content4.title}</h2>
								<p className="opacity-80 text-balance">{content4.description}</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</Bounded>
	);
}

export default BentoGrid;
