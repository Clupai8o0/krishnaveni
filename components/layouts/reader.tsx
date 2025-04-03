import React from "react";
import Bounded from "./bounded";
import { cn } from "@/lib/utils";

interface Props {
	children: React.ReactNode;
	author: {
		img: { src: string; alt: string; }
		name: string;
	}
	className?: string;
}

function Reader({ children, className, author: { img: { src, alt }, name } }: Props) {
	return (
		<Bounded className={cn("px max-w-5xl md:flex-row gap-4", className)}>
			<div className="md:w-1/3 md:pt-16">
				<img src={src} alt={alt} />
				<p className="mt-4 italic font-bold opacity-80">{name}</p>
			</div>
			<div className="md:w-2/3 reader">{children}</div>
		</Bounded>
	);
}

export default Reader;
