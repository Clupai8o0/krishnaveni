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
					<h2>Shaping Young Minds for a Brighter Tomorrow</h2>
					<p>
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