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
		<Bounded className="items-center">
			<div className={cn("max-w-4xl flex items-center", className)}>
				<div className="w-1/2">{col1}</div>
				<div className="w-1/2">{col2}</div>
			</div>
		</Bounded>
	);
}

export default TwoColumnsTight;
