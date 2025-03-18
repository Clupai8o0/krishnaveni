"use client";

import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import { cn, generateKey } from "@/lib/utils";

const shortcuts = [
	{
		title: "Apply",
		url: "/apply",
		icon: "badge-check",
		color: "bg-red-500",
	},
	{
		title: "Contact Us",
		url: "/contact",
		icon: "badge-check",
		color: "bg-blue-500",
	},
	{
		title: "Gallery",
		url: "/gallery",
		icon: "badge-check",
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
					"w-36 h-36 text-white flex items-center justify-center flex-col",
					color,
					className
				)}
			>
				<DynamicIcon name={icon as any} size={48} color="white" />
				<h2>{title}</h2>
			</div>
		</Link>
	);
};

function Shortcuts() {
	return (
		<section className="h-[100px] relative">
			<div className="absolute w-full -top-16 mx-auto">
				<div className="flex justify-center">
					{shortcuts.map((shortcut, i) => (
						<Shortcut
							key={generateKey()}
							{...shortcut}
							className={
								i === 0
									? "rounded-l-xl"
									: i === shortcuts.length - 1
									? "rounded-r-xl"
									: undefined
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Shortcuts;
