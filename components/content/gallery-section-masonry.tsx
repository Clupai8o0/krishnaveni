import { generateKey } from "@/lib/utils";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
	title: string;
	desc?: string;
	images: string[];
}

function GallerySectionMasonry({ title, desc, images }: Props) {
	return (
		<section>
			<h1 className="text-3xl mb-4 font-bold">{title}</h1>
			<ResponsiveMasonry>
				<Masonry columnsCount={3} gutter="1rem">
					{images.map((image) => (
						<img
							key={generateKey()}
							src={image}
							alt=""
							className="object-cover w-full h-auto rounded-lg"
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</section>
	);
}

export default GallerySectionMasonry;
