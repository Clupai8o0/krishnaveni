import { generateKey } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
	title: string;
	desc?: string;
	images: {
		0: string;
		1: string;
		2: string;
		3: string;
		4: string;
	};
	url: string;
}

function GallerySectionBento({ title, desc, images, url }: Props) {
	return (
		<section>
			<h1 className="text-3xl mb-4 font-bold">{title}</h1>

			<div className="flex flex-col lg:flex-row gap-4">
				<img
					src={images[0]}
					alt=""
					className="w-full lg:w-1/2 h-full object-cover rounded-lg aspect-square"
				/>
				<div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
					<img
						src={images[1]}
						alt=""
						className="w-full h-full object-cover rounded-lg aspect-square"
					/>
					<img
						src={images[2]}
						alt=""
						className="w-full h-full object-cover rounded-lg aspect-square"
					/>
					<img
						src={images[3]}
						alt=""
						className="w-full h-full object-cover rounded-lg aspect-square"
					/>
					<Link
						href={url}
						className="bg-black rounded-lg relative flex items-center justify-center hover:bg-black/50 transition duration-300"
					>
						<img
							src={images[4]}
							alt=""
							className="absolute top-0 left-0 w-full h-full object-cover rounded-lg aspect-square opacity-50"
						/>
						<span className="relative z-[5] text-white font-bold text-lg">
							View More
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default GallerySectionBento;
