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
			<div className="flex max-w-[700px] flex-1 flex-col gap-4 overflow-hidden py-6 px-6 glass-morphism rounded-2xl shadow-sm hover:shadow-md transition-shadow">
				<div className="flex justify-between items-start">
					<span className="font-montserrat text-2xl font-extrabold leading-7 text-indigo-900">
						{jobTitle}
					</span>
					<span className="font-montserrat px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
						{modality}
					</span>
				</div>
				<span className="font-montserrat font-semibold text-indigo-600 flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-indigo-400" />
					{startDate} - {endDate}
				</span>
				<p className="w-full font-medium text-slate-700 leading-relaxed">
					{description}
				</p>
				<div className="flex w-full items-center gap-2 overflow-hidden font-medium text-indigo-900 bg-indigo-50/50 p-2 rounded-lg">
					<span className="font-bold text-indigo-700">Company:</span>
					<Link
						href={company.url}
						title={company.name}
						target={"_blank"}
						rel="noopener noreferrer"
						className="truncate underline decoration-indigo-300 hover:decoration-indigo-600 transition-colors"
					>
						{company.name}
					</Link>
				</div>
				<div className="flex flex-wrap gap-2 pt-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
