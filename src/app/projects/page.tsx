import { ArrowUpRightSquareIcon, ImagePlaceholder } from "@/assets/svg";
import { ProjectCard } from "@/components";
import { PROJECTS } from "@/constants";

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex w-full flex-col items-center justify-center gap-8 px-4 pb-48 pt-24"
		>
			<div className="flex flex-col items-center gap-6">
				<h1 className="font-montserrat text-5xl font-bold text-neutral-800">
					My projects
				</h1>
				<p className="font-montserrat text-xl font-medium text-neutral-500">
					Here are some of my best projects that showcase my skills
				</p>
			</div>
			<div className="grid gap-6 duration-300 ease-out md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}
