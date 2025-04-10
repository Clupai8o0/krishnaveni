import React from "react";
import BentoGrid from "../layouts/bento-grid";

// 2. Salar Jung Museum Tour
// Our students stepped into history at Salar Jung Museum, admiring rare artifacts like the Veiled Rebecca and ancient weaponry. The guided tour deepened their appreciation for India’s rich heritage, sparking lively discussions in history class.
// 3. Geological Survey of India Visit
// At GSI Hyderabad, students examined meteorites, fossils, and mineral collections. A highlight was the earthquake simulation demo—some even got to test rock hardness tools! The trip reinforced their geology lessons in a memorable way.
//* 4. Bhongir Fort Trek
// Krishnaveni adventurers trekked Bhongir Fort, studying its unique rock formations and medieval history. The climb fostered teamwork, with seniors helping juniors navigate the rugged path. "A perfect mix of exercise and learning!" said a Class 8 student.
// 5. Agricultural Farm Visit
// Students visited a local organic farm, planting seeds and learning about sustainable agriculture. From composting to drip irrigation, they gained hands-on experience, they learnt a lot about the backbone of our society -- Farming!
// 6. Science Fair Highlights
// This year’s Science Fair buzzed with robot prototypes, from mechanical robots and biology presentations. Judges praised the innovative engineering, especially a robot prototype designed by Class 10. "Robotics is our future!" declared the principal.
// 7. Cultural Fest Celebrations
// Krishnaveni’s Cultural Fest showcased India’s diversity through classical dance showcase, folk music, and drama performances. The energetic and beautiful dance performances by the students stole the show.
// 8. Independence Day Pride
// The school commemorated Independence Day with flag hoisting, patriotic skits, and speeches on India’s freedom struggle. The hoisting of the flag was done as a tribute to the country's glory and left the students deeply moved.
// 9. Janmashtami Festivities
// Krishnaveni celebrated Janmashtami with students dressed as Krishna, Radha, and gopis. Flute performances, a mini Dahi Handi event, and storytelling sessions brought the festival’s joy to life!

// medical, cultural, wild waters, annual day
function News() {
	return (
		<BentoGrid
			title="News"
			className="mt-12"
			content1={{
				title: "Bhongir Fort Trek",
				description:
					'Krishnaveni adventurers trekked Bhongir Fort, studying its unique rock formations and medieval history. The climb fostered teamwork, with seniors helping juniors navigate the rugged path. "A perfect mix of exercise and learning!" said a Class 8 student.',
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
			content2={{
				title: "Cultural Fest Celebrations",
				description:
					"Krishnaveni’s Cultural Fest showcased India’s diversity through classical dance showcase, folk music, and drama performances.",
					// "Krishnaveni’s Cultural Fest showcased India’s diversity through classical dance showcase, folk music, and drama performances. The energetic and beautiful dance performances by the students stole the show.",
				img: {
					src: "/cultural.jpg",
					alt: "students presenting science project",
				},
			}}
			content3={{
				title: "Exciting New Digital Learning Initiative Launched",
				description:
					"Krishnaveni CBSE School has introduced a new digital learning platform to enhance students' learning experiences.",
				// "Krishnaveni CBSE School has introduced a new digital learning platform to enhance students' learning experiences. The initiative includes smart classrooms, interactive e-learning modules, and AI-powered assessments, ensuring personalized learning for every student. Teachers have been trained to integrate technology into their lessons, making education more engaging and effective. The school aims to keep pace with modern education trends and equip students with 21st-century skills.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
			content4={{
				title: "Krishnaveni Students Shine in Inter-School Quiz Competition",
				description:
					"A team of grade 9 and 10 students from Krishnaveni CBSE School secured first place in the Hyderabad Inter-School Quiz Championship.",
				// "A team of grade 9 and 10 students from Krishnaveni CBSE School secured first place in the Hyderabad Inter-School Quiz Championship. Competing against some of the city's top schools, the students impressed judges with their exceptional knowledge, quick thinking, and teamwork. The victory was a proud moment for the school, reinforcing its academic excellence and commitment to intellectual growth. The winners were felicitated in a special school assembly.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
		/>
	);
}

export default News;
