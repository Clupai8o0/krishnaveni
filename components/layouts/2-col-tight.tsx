import React from "react";
import Bounded from "./bounded";
import { cn } from "@/lib/utils";

interface Props {
	col1: React.ReactNode;
	col2: React.ReactNode;
	className?: string;
}

function TwoColumnsTight({ col1, col2, className }: Props) {
	return (
		<Bounded className="items-center pb-10">
			<div
				className={cn(
					"max-w-6xl flex items-center border rounded-4xl border-gray-300 shadow-[6px_6px_0_0_black] relative overflow-hidden",
					className
				)}
			>
				<div className="w-1/2 relative">
					<div className="absolute -z-10 aspect-square w-full max-w-lg rounded-full bg-yellow-400/40 blur-3xl filter -bottom-1/2"></div>
					{col1}
				</div>
				<div className="w-1/2 relative">
					<div className="absolute -z-10 aspect-square w-full max-w-md rounded-full bg-red-400/10 blur-3xl filter bottom-[-150%] -left-1/3"></div>
					<div className="absolute -z-10 aspect-square w-full max-w-md rounded-full bg-blue-400/20 blur-3xl filter -bottom-full -right-1/3"></div>
					{col2}
				</div>
			</div>
		</Bounded>
	);
}

export default TwoColumnsTight;
