import React from 'react'
import Bounded from '../layouts/bounded'
import Link from 'next/link';

function CTA() {
  return (
		<div className="relative bg-black overflow-hidden">
			<img
				src="/cta.JPG"
				alt="children in a circle"
				className="absolute object-cover w-full h-full opacity-20"
			/>

			<Bounded className="items-center px">
				<div className="text-white flex flex-col items-center justify-center h-[90vh] md:h-[70vh] max-w-2xl">
					<h1 className="text-4xl md:text-5xl font-black mb-4 text-center">
						Ready to Shape Your Child’s Future with Krishnaveni?
					</h1>
					<p className="text-center opacity-80 text-balance mb-8">
						Give your child the best start to their academic journey with a
						nurturing environment, top-tier TS SSC/CBSE curriculum, and holistic
						development opportunities. Join a school that values excellence,
						integrity, and innovation—where every student is encouraged to
						learn, lead, and succeed.
					</p>
					<div className="flex gap-4 mt-4">
						<Link
							href="/apply"
							className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 bg-blue-600 text-white capitalize rounded-full font-medium text-lg hover:scale-105 focus:scale-95 transition-all duration-200"
						>
							Apply
						</Link>
						<Link
							href="/contact"
							className="flex items-center justify-center px-6 md:px-10 py-2 md:py-3 text-white bg-transparent border border-white capitalize rounded-full font-medium hover:scale-105 focus:scale-95 transition-all duration-200 hover:bg-white hover:text-black"
						>
							Schedule Visit
						</Link>
					</div>
				</div>
			</Bounded>
		</div>
	);
}

export default CTA