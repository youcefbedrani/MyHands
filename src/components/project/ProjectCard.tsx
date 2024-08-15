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
		<div className="group flex max-w-[368px] flex-col gap-4">
			{/*<div className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-200">
				<div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-indigo-400 blur-3xl" />
				<ImagePlaceholder />
	</div>*/}
			<div className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-100">
				<div className="absolute left-1/2 top-1/2 z-10 grid h-fit w-[464px] min-w-[464px] -translate-x-1/2 -translate-y-1/2 rotate-12 -skew-x-[12deg] -skew-y-2 grid-cols-2 gap-4 duration-300 ease-out group-hover:rotate-0 group-hover:skew-y-[8deg] group-hover:scale-125">
					<div className="h-32 w-56 min-w-[14rem] overflow-hidden rounded-md drop-shadow-lg duration-300 ease-out group-hover:drop-shadow-2xl">
						<Image
							src={"/projects/home0.jpeg"}
							alt={title}
							width={368}
							height={257}
							className="h-full w-full rounded-md object-cover"
						/>
					</div>
					<div className="h-32 w-56 min-w-[14rem] overflow-hidden rounded-md drop-shadow-lg duration-300 ease-out group-hover:drop-shadow-2xl">
						<Image
							src={"/projects/home1.jpeg"}
							alt={title}
							width={368}
							height={257}
							className="h-full w-full rounded-md object-cover"
						/>
					</div>
					<div className="h-32 w-56 min-w-[14rem] overflow-hidden rounded-md drop-shadow-lg duration-300 ease-out group-hover:drop-shadow-2xl">
						<Image
							src={"/projects/home2.jpeg"}
							alt={title}
							width={368}
							height={257}
							className="h-full w-full rounded-md object-cover"
						/>
					</div>
					<div className="h-32 w-56 min-w-[14rem] overflow-hidden rounded-md drop-shadow-lg duration-300 ease-out group-hover:drop-shadow-2xl">
						<Image
							src={"/projects/projects.jpeg"}
							alt={title}
							width={368}
							height={257}
							className="h-full w-full rounded-md object-cover"
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-2">
				{tags &&
					tags.map((tag) => (
						<span
							key={tag}
							className="rounded-lg bg-indigo-300 px-1.5 py-1 font-montserrat text-sm font-medium text-indigo-50"
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
