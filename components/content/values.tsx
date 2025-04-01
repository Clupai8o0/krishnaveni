import React from "react";
import Bounded from "../layouts/bounded";
import {
	Goal,
	GraduationCap,
	Heart,
	HeartHandshake,
	Lightbulb,
	ListCheck,
	Sparkles,
} from "lucide-react";

function Values() {
	return (
		<Bounded className="px">
			<h1 className="text-5xl font-black mb-12 mt-18 text-center">
				Our Values
			</h1>

			<div className="grid grid-cols-2 md:grid-cols-3">
				<div className="value-container border-r-2 border-b-2">
					<div className="value-icon-cover border-yellow-500">
						<Sparkles className="text-yellow-500 value-icon" />
					</div>
					<h2 className="value-heading text-yellow-500">Excellence</h2>
					<p className="opacity-60">
						Striving for Academic and Personal Growth
					</p>
				</div>

				<div className="value-container border-b-2 md:border-r-2">
					<div className="value-icon-cover border-red-600">
						<Heart className="value-icon text-red-600" />
					</div>
					<h2 className="value-heading text-red-600">Integrity</h2>
					<p className="opacity-60">
						Building Character with Honesty and Ethics
					</p>
				</div>

				<div className="value-container border-b-2 border-r-2 md:border-r-0">
					<div className="value-icon-cover border-blue-600">
						<Lightbulb className="value-icon text-blue-600" />
					</div>
					<h2 className="value-heading text-blue-600">Innovation</h2>
					<p className="opacity-60">Encouraging Curiosity and Creativity</p>
				</div>

				<div className="value-container border-b-2 md:border-b-0 md:border-r-2">
					<div className="value-icon-cover border-green-600">
						<HeartHandshake className="value-icon text-green-600" />
					</div>
					<h2 className="value-heading text-green-600">Respect</h2>
					<p className="opacity-60">
						Creating a Culture of Kindness and Inclusion
					</p>
				</div>
				<div className="value-container border-r-2">
					<div className="value-icon-cover border-orange-600">
						<Goal className="value-icon text-orange-600" />
					</div>
					<h2 className="value-heading text-orange-600">Leadership</h2>
					<p className="opacity-60">Inspiring Confidence and Responsibility</p>
				</div>
				<div className="value-container">
					<div className="value-icon-cover border-gray-600">
						<GraduationCap className="value-icon text-gray-600" />
					</div>
					<h2 className="value-heading text-gray-600">Lifelong Learning</h2>
					<p className="opacity-60">Developinga Passion for Knowledge</p>
				</div>
			</div>
		</Bounded>
	);
}

export default Values;
