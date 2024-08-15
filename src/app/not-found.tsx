import { ArrowIcon } from "@/assets/svg";
import Link from "next/link";
import React from "react";

export default function Custom404() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<div className="relative flex flex-col items-center justify-center overflow-hidden">
				<div className="absolute bottom-0 left-0 right-0 h-48 w-full bg-gradient-to-b from-white/60 via-white to-white" />
				<span className="font-montserrat text-[10rem] font-bold text-indigo-400">
					404
				</span>
			</div>
			<div className="relative bottom-20 flex flex-col gap-4">
				<span className="text-xl font-semibold text-indigo-800">
					This page couldn&apos;t be found
				</span>
				<hr className="border-indigo-300" />
				<Link
					href={"/"}
					className="flex w-min gap-2 rounded-lg bg-indigo-500 px-3 py-2 font-medium text-white hover:bg-indigo-400"
				>
					<ArrowIcon className="h-6 w-6 rotate-180" />
					<span className="whitespace-nowrap">Back to home</span>
				</Link>
			</div>
		</div>
	);
}
