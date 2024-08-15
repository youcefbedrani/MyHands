import { PROJECTS } from "@/constants";
import React from "react";
import { ProjectCard } from "..";

export default function ProjectSection() {
	return (
		<section
			id="projects"
			className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden px-4 py-24 md:py-48"
		>
			<div className="flex flex-col items-center gap-6">
				<h1 className="font-montserrat text-5xl font-bold text-neutral-800">
					Featured projects
				</h1>
				<p className="font-montserrat text-xl font-medium text-neutral-500">
					Here are some of my best projects that showcase my skills
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}
