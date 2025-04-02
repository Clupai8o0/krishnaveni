import Bounded from '@/components/layouts/bounded';
import NavbarBg from '@/components/navigation/navbar-bg'
import React from 'react'

function Contact() {
  return (
		<main>
			<NavbarBg />

			<Bounded className="flex-row px mt-18 text-lg mb-18">
				<div className="w-1/2">
					<h1 className="text-5xl font-black mb-4">Apply / Contact</h1>
					<p className="opacity-80">
						Have any questions about us? Or you wish to apply or schedule a
						visit?
					</p>
					<p>
						<span className="font-extrabold">Contact</span>: +91 99633 73679
					</p>
				</div>

				<div className="w-1/2">
					<h2 className="text-3xl font-extrabold mb-2">Address:</h2>
					<p className="opacity-80">
						Krishnaveni School of Peerzadiguda, Peerzadiguda, Uppal, Hyderabad,
						Telangana, 500039
					</p>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.419300086718!2d78.5961379762269!3d17.391654002679996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9efcda041387%3A0xf6d6e640790d1d31!2sKRISHNAVENI%20SCHOOL%20Of%20Peerzadiguda!5e0!3m2!1sen!2sau!4v1743595878699!5m2!1sen!2sau"
						height="350"
						style={{ border: 0 }}
						loading="lazy"
						allowFullScreen={false}
						referrerPolicy="no-referrer-when-downgrade"
						className="my-4 w-full"
					></iframe>
				</div>
			</Bounded>
		</main>
	);
}

export default Contact