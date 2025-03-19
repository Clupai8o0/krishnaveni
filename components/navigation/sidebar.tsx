import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { footerLinks } from '@/lib/links';
import { generateKey } from '@/lib/utils';
import Link from 'next/link';

function Sidebar() {
  return (
		<Sheet>
			<SheetTrigger className="md:hidden">
				<Menu className="w-8 h-8" />
			</SheetTrigger>
			<SheetContent className="flex flex-col items-start bg-[#3650AD] border-none">
				<SheetHeader className="pt-24 px-10">
					<img src="/logo-white.png" alt="krishnaveni text logo" />
				</SheetHeader>

				<div className="px-9 flex items-center h-[60vh]">
					<ul className="flex flex-col gap-8">
						{footerLinks.map(({ url, text }) => (
							<li key={generateKey()}>
								<Link
									href={url}
									className="text-white uppercase text-5xl font-light opacity-80 hover:font-semibold hover:opacity-100 transition-all duration-300"
								>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default Sidebar