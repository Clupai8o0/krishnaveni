import { createClient } from "@/prismicio";

import Bounded from "../layouts/bounded";
import Navbar from "./navbar";

const Header = async () => {
	const client = createClient();
	const nav = await client.getSingle("global_nav");

	console.log(nav)
	return (
		<header className="fixed top-0 left-0 w-full z-50 px">
			<Bounded>
				<Navbar links={nav} />
			</Bounded>
		</header>
	);
};

export default Header;
