import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Message = ({
	img,
	q1,
	q2,
	author,
	url,
	reverse
}: {
	img: string;
	q1: string;
	q2: string;
	author: string;
	url: string;
	reverse?: boolean;
}) => (
	<>
		<div className={cn("flex flex-col lg:flex-row items-center", reverse && "lg:flex-row-reverse")}>
			<div className="lg:w-1/3">
				<img src={img} alt={author} className="w-full object-contain" />
			</div>

			<div className="flex flex-col items-center text-center lg:text-start lg:items-start justify-center md:text-xl lg:w-2/3 max-w-2xl relative h-full mt-10 lg:mt-0">
				<div className="text-[200px] hidden lg:block absolute top-0 -left-12">
					“
				</div>
				<div className="text-[200px] hidden lg:block absolute -bottom-20 right-12">
					”
				</div>
				<span className="italic">{q1}</span>
				<span className="ml-8 italic">{q2}</span>
				<span className="mt-4 md:text-lg opacity-60">- {author}</span>
			</div>
		</div>

		<div className="mt-12 flex justify-center items-center">
			<Link
				href={url}
				className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 bg-blue-600 text-white capitalize rounded-full font-medium hover:scale-105 focus:scale-95 transition-all duration-200"
			>
				View Full Message
			</Link>
		</div>
	</>
);

function Messages() {
	return (
		<Bounded className="px">
			<h1 className="text-5xl font-black mb-12 mt-18 text-center">
				Our Message
			</h1>

			<Message
				img="/princi.png"
				q1="Every student has a story waiting to unfold—"
				q2="our job is just to give them the pen."
				author="V. Kavitha (Principal)"
				url="/message/principal"
			/>
			<Message
				img="/chair.png"
				q1="Our job is not to prepare students for something."
				q2="Our job is to help students prepare themselves for anything."
				author="P. V. Rajendra Prasad (Chairman)"
				url="/message/chairman"
				reverse
			/>
		</Bounded>
	);
}

export default Messages;
