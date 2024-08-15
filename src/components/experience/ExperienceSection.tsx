import { EXPERIENCE } from "@/constants";
import { ExperienceCard } from "..";

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-indigo-100 px-4 py-24 md:py-48"
		>
			<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-indigo-100/80" />
			<div className="z-10 flex flex-col gap-6 md:items-center">
				<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
					Experience
				</h1>
				<p className="font-montserrat text-xl font-medium text-indigo-400">
					This is my work experience in the IT industry
				</p>
			</div>
			<div className="z-10 flex w-full flex-col items-center overflow-hidden">
				{EXPERIENCE.map((item, index) => (
					<ExperienceCard
						key={item.jobTitle}
						item={item}
						isLast={index === EXPERIENCE.length - 1}
					/>
				))}
			</div>
		</section>
	);
}
