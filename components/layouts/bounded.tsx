import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	id?: string;
	children: React.ReactNode;
}

function Bounded({ className, id, children }: Props) {
	return (
		<section
			className={cn("w-full flex justify-center overflow-hidden")}
			id={id}
		>
			<div className={cn("flex flex-col relative max-w-7xl w-full", className)}>
				{children}
			</div>
		</section>
	);
}

export default Bounded;
