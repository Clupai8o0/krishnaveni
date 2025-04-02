import Bounded from "@/components/layouts/bounded";
import Reader from "@/components/layouts/reader";
import NavbarBg from "@/components/navigation/navbar-bg";
import React from "react";

function ChairmanMessage() {
	return (
		<main>
			<NavbarBg />

			<Reader
				author={{
					img: {
						src: "/chair.png",
						alt: "P. V. Rajendra Prasad chairman picture",
					},
					name: "P. V. Rajendra Prasad (Chairman)",
				}}
				className="px mb-18"
			>
				<h1 className="mt-18 mb-8 text-5xl font-black">Chairman's Message</h1>

				<article className="flex flex-col gap-8 text-lg">
					<section>
						<q className="">
							Our job is not to prepare students for something. Our job is to
							help students prepare themselves for anything.
						</q>
						<p className="font-extrabold">
							Respected Parents, Students and Community Members,
						</p>
						<p>
							When we founded Krishnaveni School, we envisioned more than just
							another educational institution – we dreamed of creating a{" "}
							<span>microcosm of the ideal society</span>, where knowledge meets
							virtue, and ambition walks hand-in-hand with empathy. Today, as I
							witness our students’ achievements, I’m filled with profound
							gratitude for everyone who has helped turn this vision into
							reality.
						</p>
					</section>

					<section>
						<h2>The Krishnaveni Difference: Education Reimagined</h2>
						<p>
							In an era where many schools chase rankings, we pursue{" "}
							<span>meaningful impact</span>. Consider how we’re different:
						</p>
						<ol>
							<li>
								<span>Future-Reader Infrastructure</span>
							</li>
							<ul>
								<li>
									<span>Smart Classrooms</span> with interactive panels
								</li>
								<li>
									<span>Maker Spaces</span> for robotics and innovation
								</li>
								<li>
									<span>Digital Language Labs</span> for global communication
									skills
								</li>
							</ul>
							<li>
								<span>The Teacher Advantage</span>. Our faculty undergoes{" "}
								<span>200+ hours of annual training</span> in:
							</li>
							<ul>
								<li>Neuro-education techniques</li>
								<li>Positive psychology applications</li>
								<li>AI-assisted personalized learning</li>
							</ul>
							<li>
								<span>Learning That Matters</span>. We’ve replaced rote
								memorization with:
							</li>
							<ul>
								<li>
									<span>Case-Study Methodology</span> (Like “How would you solve
									Hyderabad’s traffic?”)
								</li>
								<li>
									<span>Passion Projects</span> (6 months to explore any
									interest deeply)
								</li>
								<li>
									<span>Global Classroom Exchanges</span> (Virtual
									collaborations with overseas schools)
								</li>
							</ul>
						</ol>
					</section>

					<section>
						<h2>The Values That Guide Us</h2>
						<p>
							Amidst technological leaps, we hold fast to timeless principles:
						</p>
						<ul>
							<li>
								<span>Sanskar First</span> – Morning assemblies blending shlokas
								with scientific facts
							</li>
							<li>
								<span>Seva as Curriculum</span> – Mandatory community service
								hours
							</li>
							<li>
								<span>Roots & Wings</span> – Teaching Telangana’s heritage
								alongside space technology
							</li>
						</ul>
					</section>

					<section>
						<h2>To Our Parents: Custodians of Trust</h2>
						<p>
							We understand the weight of your decision – choosing a school is
							choosing the architects of your child’s worldview. This is why we
							practice <span>radical transparency</span>:
						</p>
						<ul>
							<li>Live CCTV access (with privacy safeguards)</li>
							<li>Real-time performance dashboards</li>
							<li>Quarterly “Grievance to Gratitude” open forums</li>
						</ul>
					</section>

					<section>
						<h2>A Message to Students</h2>
						<p>You’re entering an ecosystem designed to:</p>
						<ul>
							<li>
								<span>Spark your curiosity</span> (Our “Why Wall” never has
								blank spaces)
							</li>
							<li>
								<span>Stretch your capabilities</span> (Through Olympiads,
								hackathons)
							</li>
							<li>
								<span>Soothe your struggles</span> (With peer counseling
								circles)
							</li>
						</ul>
					</section>

					<section>
						<h2>The Road Ahead</h2>
						<p>As we expand our:</p>
						<ul>
							<li>
								<span>Space Tech Club</span> (In partnership with ISRO outreach)
							</li>
							<li>
								<span>Young Entrepreneurs Program</span> (With seed funding for
								student startups)
							</li>
							<li>
								<span>AI For Good Initiative</span> (Solving local problems
								through technology)
							</li>
						</ul>
						<p>
							We remain anchored to our founding belief:{" "}
							<span>
								True education illuminates both the mind and the heart
							</span>
							.
						</p>
						<p>
							<span>Join us</span> in this revolutionary journey where every
							child is taught not what to think, but <span>how to think</span>;
							not just to earn a living, but to{" "}
							<span>craft a life of purpose</span>.
						</p>
					</section>

					<section className="!gap-0">
						<p className="font-extrabold">With hope and determination,</p>
						<p>Polavarapu Venkata Rajendra Prasad</p>
						<p className="italic">Chairman</p>
					</section>
				</article>
			</Reader>
		</main>
	);
}

export default ChairmanMessage;
