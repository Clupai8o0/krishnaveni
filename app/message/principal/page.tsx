import Reader from "@/components/layouts/reader";
import NavbarBg from "@/components/navigation/navbar-bg";
import React from "react";

function PrincipalMessage() {
	return (
		<main>
			<NavbarBg />

			<Reader
				author={{
					img: {
						src: "/princi.png",
						alt: "V. Kavitha principal picture",
					},
					name: "V. Kavitha (Principal)",
				}}
				className="px mb-18"
			>
				<h1 className="mt-18 mb-8 text-5xl font-black">Principal's Message</h1>

				<article className="flex flex-col gap-8 text-lg">
					<section>
						<p className="font-extrabold">
							My Dear Students, Parents, and Well-Wishers,
						</p>
						<p>
							It is with immense pride and heartfelt joy that I welcome you to{" "}
							<span>Krishnaveni School of Peerzadiguda</span> – not just an
							institution of learning, but a home away from home where dreams
							take flight, talents blossom, and futures are built. As I walk
							through our vibrant corridors each morning, witnessing the energy
							of our students and the dedication of our teachers, I am reminded
							of why education is the noblest profession – we don’t just teach
							subjects; we shape lives.
						</p>
						<p>
							At Krishnaveni, we believe every child is a universe of potential
							waiting to be discovered. Unlike traditional schools where
							students are just roll numbers, here,{" "}
							<span>
								we know every child by name, understand their unique strengths,
								and celebrate their individuality.
							</span>{" "}
							Whether it’s the quiet artist who paints breathtaking canvases,
							the budding scientist who asks “why” a hundred times a day, or the
							compassionate friend who uplifts others – each student adds
							irreplaceable value to our family.
						</p>
					</section>

					<section>
						<h2>Our Approach: Where Learning Comes Alive</h2>
						<p>
							What truly sets us apart is our commitment to making education
							<span>meaningful, exciting, and relevant</span>. In our
							classrooms:
						</p>
						<ul>
							<li>
								<span>Curiosity is the curriculum</span> – Lessons begin with
								real-world questions like “How do clouds form?” or “Why do
								currencies have value?”
							</li>
							<li>
								<span>Creativity is graded</span> – From designing apps to
								composing music, original thinking is rewarded
							</li>
							<li>
								<span>Compassion is taught</span> – Through community projects
								and peer mentoring
							</li>
						</ul>
						<p>
							Our teachers are more than educators – they are{" "}
							<span>learning architects</span>. Trained in the latest
							pedagogical methods, they don’t just deliver lectures; they{" "}
							<span>facilitate discoveries</span>. When we teach fractions,
							students bake cakes to understand measurements. History comes
							alive through role-plays of historical events. Even complex
							physics concepts turn into thrilling experiments in our
							<span>state-of-the-art science labs</span>.
						</p>
					</section>

					<section>
						<h2>Beyond Academics: Building Character</h2>
						<p>
							While academic excellence is crucial, we measure success by more
							than marksheets. Our <span>Five Pillars Program</span> ensures
							holistic growth:
						</p>
						<ol>
							<li>
								<span>Intellectual Growth</span> – Critical thinking classes,
								research projects
							</li>
							<li>
								<span>Emotional Intelligence</span> – Mindfulness sessions,
								counseling
							</li>
							<li>
								<span>Physical Wellbeing</span> – Yoga, nutrition workshops,
								sports
							</li>
							<li>
								<span>Social Responsibility</span> – Eco-clubs, charity drives
							</li>
							<li>
								<span>Cultural Pride</span> – Folk art preservation, language
								festivals
							</li>
						</ol>
					</section>

					<section>
						<h2>To Our Parents: Partners in Growth</h2>
						<p>
							Your trust humbles us. We see how mothers wipe anxious tears on
							first days, how fathers proudly display every progress report, how
							grandparents pass down values that complement our teachings. This
							is why we’ve built <span>360° engagement systems</span>:
						</p>
						<ul>
							<li>Monthly “Open Classroom” days</li>
							<li>Parenting workshops on digital-age challenges</li>
							<li>Community celebrations like Harvest Fest</li>
						</ul>
					</section>

					<section>
						<h2>Our Promise to Students</h2>
						<p>When you walk through our gates:</p>
						<ul>
							<li>
								You’ll <span>fail safely</span> – because mistakes are just
								discoveries in disguise
							</li>
							<li>
								You’ll <span>find your voice</span> – whether through debates,
								blogs or theater
							</li>
							<li>
								You’ll <span>leave ready</span> – equipped not just for exams,
								but for life’s adventures
							</li>
						</ul>
						<p>
							As the world changes faster than ever, Krishnaveni stands as an
							anchor of <span>values</span> and a launchpad for{" "}
							<span>innovation</span>. Our alumni – now doctors, engineers,
							entrepreneurs and artists – often return to share how their
							journey began here, in these very classrooms where we don’t just
							teach lessons, <span>we teach how to learn forever</span>.
						</p>
						<p>
							<span>Welcome home</span> to a place where every day brings new
							wonders, where education isn’t a race but a joyful expedition, and
							where your child’s potential will find its truest expression.
						</p>
					</section>

					<section>
						<p className="font-extrabold">With unwavering commitment,</p>
						<p>V. Kavitha</p>
						<p className="italic">Principal</p>
					</section>
				</article>
			</Reader>
		</main>
	);
}

export default PrincipalMessage;
