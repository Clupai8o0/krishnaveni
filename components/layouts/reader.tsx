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
		<Bounded className={cn("max-w-5xl flex-row gap-4", className)}>
			<div className="w-1/3 pt-16">
				<img src={src} alt={alt} />
				<p className="mt-4 italic font-bold">{name}</p>
			</div>
			<div className="w-2/3">{children}</div>
		</Bounded>
	);
}

export default Reader;
