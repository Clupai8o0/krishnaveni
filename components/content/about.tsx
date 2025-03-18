import React from 'react'
import TwoColumnsTight from '../layouts/2-col-tight';

function About() {
  return (
		<TwoColumnsTight
			col1={
				<>
					<img src="/hand.png" alt="child with colored hands showing camera" />
				</>
			}
			col2={
				<div>
					<h2 className="font-black text-4xl text-balance mb-4">
						Shaping Young Minds for a <span className="text-yellow-500 underline underline-offset-8 decoration-wavy">Brighter Tomorrow</span>
					</h2>
					<p className="text-balance opacity-80">
						At Krishnaveni CBSE School, we are committed to nurturing young
						learners through a well-rounded education that blends academic
						excellence with character development. Located in the heart of
						Hyderabad, Telangana, we provide a stimulating and inclusive
						learning environment where students from nursery to grade 10 grow
						into confident, responsible, and future-ready individuals.
					</p>
				</div>
			}
			className="mt-12"
		/>
	);
}

export default About