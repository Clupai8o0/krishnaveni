import React from "react";
import Bounded from "../layouts/bounded";
import Link from "next/link";

function Message() {
	return (
		<Bounded className="px">
			<h1 className="text-5xl font-black mb-12 mt-18 text-center">
				Our Message
			</h1>

			<div className="flex items-center">
				<div className="w-1/3">
					<img
						src="/princi.png"
						alt="Principal"
						className="w-full object-contain"
					/>
				</div>

				<div className="flex flex-col items-start justify-center text-xl w-2/3 max-w-2xl relative h-full">
					<div className="text-[200px] absolute top-0 -left-12">“</div>
					<div className="text-[200px] absolute -bottom-20 right-12">”</div>
					<span className="italic">
						Our job is not to prepare students for something.
					</span>
					<span className="ml-8 italic">
						Our job is to help students prepare themselves for anything.
					</span>
					<span className="mt-4 text-lg opacity-60">
						- V. Kavitha (Principal)
					</span>
				</div>
			</div>

			<div className="flex items-center flex-row-reverse mt-20">
				<div className="w-1/3">
					<img
						src="/chair.png"
						alt="Principal"
						className="w-full object-contain"
					/>
				</div>

				<div className="flex flex-col items-start justify-center text-xl w-2/3 max-w-2xl relative h-full">
					<div className="text-[200px] absolute top-0 -left-12">“</div>
					<div className="text-[200px] absolute -bottom-20 right-12">”</div>
					<span className="italic">
						Our job is not to prepare students for something.
					</span>
					<span className="ml-8 italic">
						Our job is to help students prepare themselves for anything.
					</span>
					<span className="mt-4 text-lg opacity-60">
						- Polavarapu Venkata Rajendra Prasad (Chairman)
					</span>
				</div>
			</div>

			<div className="mt-20 flex justify-center items-center">
				<Link
					href="/message"
					className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 bg-blue-600 text-white capitalize rounded-full font-medium hover:scale-105 focus:scale-95 transition-all duration-200"
				>
					View Full Message
				</Link>
			</div>
		</Bounded>
	);
}

export default Message;
