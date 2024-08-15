import { FiverrIcon, GitHubIcon, LinkedInIcon } from "@/assets/svg";
import { FIVERR_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import Link from "next/link";
import React from "react";
import { ContactForm } from "..";

export default function ContactSection() {
	return (
		<section
			id="work-with-me"
			className="flex w-full items-center justify-center py-48"
		>
			<div className="z-10 flex w-full max-w-[1000px] flex-col items-center gap-24 max-xl:px-4">
				<div className="flex flex-col justify-center gap-8 md:items-center">
					<div className="flex items-center gap-8">
						<h1 className="font-montserrat text-5xl font-bold text-indigo-900">
							Let&apos;s connect
						</h1>
						<div className="flex items-center gap-4">
							<Link href={LINKEDIN_URL} title="LinkedIn">
								<LinkedInIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
							</Link>
							<Link href={GITHUB_URL} title="Github">
								<GitHubIcon className="hover:fill-indigo h-6 w-6 fill-indigo-950" />
							</Link>
							<Link href={FIVERR_URL} title="Fiverr">
								<FiverrIcon className="hover:fill-indigo h-5 fill-indigo-950 hover:opacity-80" />
							</Link>
						</div>
					</div>
					<span className="text-center font-montserrat text-xl text-neutral-500">
						I&apos;m always open to new opportunities. Feel free to
						reach out to me using the form on the left or through my
						social media profiles below.
					</span>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
