"use client";

import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import { cn, generateKey } from "@/lib/utils";

const shortcuts = [
	{
		title: "Apply",
		url: "/apply",
		icon: "user-round-check",
		color: "bg-blue-600",
	},
	{
		title: "Contact",
		url: "/contact",
		icon: "phone-call",
		color: "bg-red-500",
	},
	{
		title: "Gallery",
		url: "/gallery",
		icon: "images",
		color: "bg-green-500",
	},
];

const Shortcut = ({
	title,
	url,
	icon,
	color,
	className,
}: {
	title: string;
	url: string;
	icon: string;
	color: string;
	className?: string;
}) => {
	return (
		<Link href={url}>
			<div
				className={cn(
					"w-24 h-24 md:w-40 md:h-40 text-white flex items-center justify-center flex-col gap-1 md:gap-3 rounded-full hover:scale-105 focus:scale-95 transition-all duration-200 shadow-lg",
					color,
					className
				)}
			>
				<DynamicIcon name={icon as any} className="w-6 h-6 md:w-10 md:h-10" color="white" />
				<h2 className="font-semibold md:text-lg">{title}</h2>
			</div>
		</Link>
	);
};

function Shortcuts() {
	return (
		<section className="h-[100px] relative">
			<div className="absolute w-full -top-16 md:-top-20 mx-auto">
				<div className="flex justify-center gap-2 md:gap-12">
					{shortcuts.map((shortcut, i) => (
						<Shortcut key={generateKey()} {...shortcut} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Shortcuts;
