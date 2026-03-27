import { ArrowUpRightSquareIcon, ImagePlaceholder } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectInterface {
	title: string;
	description: string;
	tags: string[];
	image: string;
	url: string;
	blogUrl: string;
}

interface ProjectCardInterface {
	project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardInterface) {
	const { title, description, image, url, blogUrl, tags } = project;

	return (
		<div className="group flex max-w-[368px] flex-col gap-4 glass-morphism p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]">
			{/*<div className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
				<div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-indigo-400 blur-3xl" />
				<ImagePlaceholder />
	</div>*/}
			<div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-100 border border-white/10 shadow-inner">
				<Image
					src={image || "/assets/images/project_fallback_1.png"}
					alt={title}
					width={400}
					height={240}
					className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
			</div>
			<div className="flex gap-2">
				{tags &&
					tags.map((tag) => (
						<span
							key={tag}
							className="rounded-lg bg-indigo-500/10 backdrop-blur-sm px-2 py-1 font-montserrat text-xs font-semibold text-indigo-600 border border-indigo-200/50"
						>
							{tag}
						</span>
					))}
			</div>
			<span className="font-montserrat text-2xl font-bold text-neutral-800">
				{title}
			</span>
			<p className="line-clamp-3 font-montserrat text-lg text-neutral-500">
				{description}
			</p>
			<div className="flex gap-4">
				<Link
					href={blogUrl}
					title="Details"
					className="flex items-center justify-center gap-2 rounded-lg bg-indigo-400 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300"
				>
					Details
				</Link>
				<Link
					href={url}
					rel="noopener noreferrer"
					target={"_blank"}
					title="Open code"
					className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-500 hover:text-indigo-400"
				>
					Open code
					<ArrowUpRightSquareIcon className="h-4 w-4" />
				</Link>
			</div>
		</div>
	);
}
