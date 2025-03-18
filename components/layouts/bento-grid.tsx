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
	content4: {
		title: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
	};
}

// turn into url
function BentoGrid({
	title,
	className,
	content1,
	content2,
	content3,
	content4,
}: Props) {
	return (
		<Bounded className={cn("items-center", className)}>
			<h1 className="text-5xl">{title}</h1>
			<div className="w-full grid grid-cols-3 gap-8">
				<div className="col-span-1">
					<h2>{content1.title}</h2>
					<p>{content1.description}</p>
				</div>
				<div className="col-span-2">
					<h2>{content2.title}</h2>
					<p>{content2.description}</p>
				</div>
			</div>
			<div className="w-full grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<h2>{content3.title}</h2>
					<p>{content3.description}</p>
				</div>
				<div className="col-span-1">
					<h2>{content4.title}</h2>
					<p>{content4.description}</p>
				</div>
			</div>
		</Bounded>
	);
}

export default BentoGrid;
