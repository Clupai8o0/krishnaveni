import About from "@/components/content/about";
import CTA from "@/components/content/cta";
import Hero from "@/components/content/hero";
import News from "@/components/content/news";
import Shortcuts from "@/components/content/shortcuts";
import Testimonials from "@/components/content/testimonials";
import Values from "@/components/content/values";
import TwoColumnsTight from "@/components/layouts/2-col-tight";
import BentoGrid from "@/components/layouts/bento-grid";

export default function Home() {
	return (
		<main>
			<Hero />
			<Shortcuts />
			<About />
			<News />
			<Values />
			<Testimonials />
		</main>
	);
}
