import { EXPERIENCE } from "@/constants";
import Link from "next/link";
import React from "react";

interface ExperienceCardInterface {
	item: (typeof EXPERIENCE)[0];
	isLast?: boolean;
}

export default function ExperienceCard({
	item,
	isLast = false,
}: ExperienceCardInterface) {
	const {
		jobTitle,
		description,
		company,
		startDate,
		endDate,
		modality,
		tags,
	} = item;

	return (
		<div key={item.jobTitle} className="flex gap-4 max-sm:w-full">
			{isLast ? (
				<div className="min-w-6 flex flex-col items-center">
					<span className="min-w-1 h-4 min-h-[1rem] w-1 bg-indigo-300" />
					<span className="h-6 max-h-[1.5rem] min-h-[1.5rem] w-6 min-w-[1.5rem] max-w-[1.5rem] rounded-full bg-indigo-300" />
					<span className="min-w-1 h-full min-h-full w-1 bg-gradient-to-b from-indigo-300 via-indigo-100" />
				</div>
			) : (
				<div className="flex flex-col items-center pt-4">
					<span className="h-6 max-h-[1.5rem] min-h-[1.5rem] w-6 min-w-[1.5rem] max-w-[1.5rem] rounded-full bg-indigo-300" />
					<span className="min-w-1 h-full min-h-full w-1 bg-indigo-300" />
				</div>
			)}
			<div className="flex max-w-[650px] flex-1 flex-col gap-4 overflow-hidden py-4">
				<span className="font-montserrat text-2xl font-bold leading-7 text-indigo-900">
					{jobTitle}
				</span>
				<span className="font-montserrat font-medium text-indigo-900">
					{startDate} - {endDate}
				</span>
				<p className="w-full font-medium text-indigo-900">
					{description}
				</p>
				<div className="flex items-center gap-1 font-medium text-indigo-900">
					<span className="font-semibold">Modality:</span>
					<span>{modality}</span>
				</div>
				<div className="flex w-full items-center gap-1 overflow-hidden font-medium text-indigo-900">
					<span className="font-semibold">Company:</span>
					<Link
						href={company.url}
						title={company.name}
						target={"_blank"}
						rel="noopener noreferrer"
						className="truncate underline"
					>
						{company.name}
					</Link>
				</div>
				<hr className="border-indigo-300" />
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-indigo-300 px-2.5 py-1 text-sm font-medium text-indigo-50"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
