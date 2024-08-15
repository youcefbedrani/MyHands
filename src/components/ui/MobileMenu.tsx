"use client";

import { BarsMenuIcon } from "@/assets/svg";
import React, { useState } from "react";
import { XMarkIcon } from "../../assets/svg/index";
import Link from "next/link";
import { PDF_PATH } from "@/constants";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuState = () => {
		if (isOpen) {
			setIsOpen(false);
			document.body.style.overflow = "unset";
		} else {
			setIsOpen(true);
			document.body.style.overflow = "hidden";
		}
	};

	return (
		<>
			<button
				title="Menu"
				type="button"
				className="block text-neutral-500 hover:text-indigo-500 md:hidden"
				onClick={handleMenuState}
			>
				<BarsMenuIcon className="h-6 w-6" />
			</button>
			{isOpen && (
				<div className="fixed left-0 right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white/40 backdrop-blur-lg">
					<div className="fixed right-0 top-0 z-50 flex w-full gap-4 p-4">
						<div className="flex h-[calc(100vh-2rem)] w-full flex-col gap-4 rounded-xl bg-white p-4 text-neutral-500">
							<Link
								href={"/projects"}
								rel="noopener noreferrer"
								title="Projects"
								className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
							>
								Projects
							</Link>
							<Link
								href={"/#experience"}
								rel="noopener noreferrer"
								title="Experience"
								className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
							>
								Experience
							</Link>
							<Link
								href={"/#work-with-me"}
								rel="noopener noreferrer"
								title="Work with me"
								className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
							>
								Work with me
							</Link>
							<Link
								href={`/${PDF_PATH}`}
								target={"_blank"}
								title="View CV"
								rel="noopener noreferrer"
								aria-label="View CV"
								role="button"
								tabIndex={0}
								className="font-montserrat text-lg font-medium leading-6 text-neutral-500 hover:text-indigo-500"
							>
								View CV
							</Link>
						</div>
						<button
							title="Close menu"
							type="button"
							className="flex h-fit w-[3.5rem] min-w-[3.5rem] items-center justify-center p-2 text-neutral-500 hover:text-indigo-500 md:hidden"
							onClick={handleMenuState}
						>
							<XMarkIcon className="h-8 min-h-[2rem] w-8 min-w-[2rem]" />
						</button>
					</div>
				</div>
			)}
		</>
	);
}
