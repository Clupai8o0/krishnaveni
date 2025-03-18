import React from 'react'
import BentoGrid from '../layouts/bento-grid';

function News() {
  return (
		<BentoGrid
			title="News"
			className="mt-12"
			content1={{
				title: "Krishnaveni CBSE School Hosts Annual Science Fair 2025",
				description:
					"Krishnaveni CBSE School recently organized its much-anticipated Annual Science Fair 2025, where students from grades 3 to 10 showcased their innovative projects and experiments. The event featured STEM-based exhibits, robotics demonstrations, and live experiments, highlighting students' creativity and problem-solving skills. Parents, teachers, and industry experts attended the fair, appreciating the young innovators. The principal applauded the students' efforts, emphasizing the importance of hands-on learning in science and technology.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
			content2={{
				title: "Sports Day 2025: A Celebration of Team Spirit and Excellence",
				description:
					"The school’s Annual Sports Day 2025 was a thrilling event filled with energy, enthusiasm, and competitive spirit. Students participated in track and field events, team sports, and fun activities, demonstrating their athletic prowess. The event concluded with an award ceremony recognizing the best athletes and sports teams. Parents cheered on their children, and the school reaffirmed its commitment to fostering physical fitness and teamwork among students.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
			content3={{
				title: "Exciting New Digital Learning Initiative Launched",
				description:
					"Krishnaveni CBSE School has introduced a new digital learning platform to enhance students' learning experiences. The initiative includes smart classrooms, interactive e-learning modules, and AI-powered assessments, ensuring personalized learning for every student. Teachers have been trained to integrate technology into their lessons, making education more engaging and effective. The school aims to keep pace with modern education trends and equip students with 21st-century skills.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
			content4={{
				title: "Krishnaveni Students Shine in Inter-School Quiz Competition",
				description:
					"A team of grade 9 and 10 students from Krishnaveni CBSE School secured first place in the Hyderabad Inter-School Quiz Championship. Competing against some of the city's top schools, the students impressed judges with their exceptional knowledge, quick thinking, and teamwork. The victory was a proud moment for the school, reinforcing its academic excellence and commitment to intellectual growth. The winners were felicitated in a special school assembly.",
				img: {
					src: "hero-1.jpg",
					alt: "students presenting science project",
				},
			}}
		/>
	);
}

export default News