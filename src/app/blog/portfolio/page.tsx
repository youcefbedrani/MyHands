import { ArrowUpRightSquareIcon, GitHubIcon } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	return (
		<>
			<div className="mx-auto flex max-w-screen-xl justify-between px-4 text-neutral-600">
				<article className="mx-auto flex w-full max-w-2xl flex-col gap-6">
					<header className="mb-4 flex flex-col gap-5 text-neutral-500">
						<h1 className="font-montserrat text-3xl font-extrabold leading-tight text-neutral-800 lg:text-5xl">
							A Glimpse into My Creative Sandbox: My Portfolio
							Website
						</h1>
						<div className="flex gap-1 text-base">
							<address className="flex gap-1">
								<span>By</span>
								<span className="font-semibold text-neutral-600">
									Bedrani Mohammed  Adel
								</span>
							</address>
							<span>on</span>
							<time dateTime="2024-05-15" title="May 18th, 2024">
								May 18th, 2024
							</time>
						</div>
						<div className="flex flex-wrap gap-2">
							<span
								title="Next.js"
								aria-label="Next.js"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								Next.js
							</span>
							<span
								title="React.js"
								aria-label="React.js"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								React.js
							</span>
							<span
								title="TypeScript"
								aria-label="TypeScript"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								TypeScript
							</span>
							<span
								title="Tailwindcss"
								aria-label="Tailwindcss"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								Tailwindcss
							</span>
							<span
								title="SEO"
								aria-label="SEO"
								className="rounded-md px-2.5 py-1 text-sm outline outline-1 outline-neutral-300"
							>
								SEO
							</span>
						</div>
					</header>
					<p className="lead">
						Hi everyone! My name is{" "}
						<strong>Daniel Pe&ntilde;aloza,</strong> and I&apos;m a
						software developer with a passion for creating{" "}
						<strong>beautiful, user-friendly websites</strong> and{" "}
						<strong>applications.</strong>
					</p>
					<div className="flex w-fit flex-col gap-2 text-neutral-500">
						<h2 className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl">
							Table of content
						</h2>
						<ol className="mt-4 space-y-2">
							<li>
								<Link
									className="text-indigo-500 hover:text-indigo-700 hover:underline"
									href={"/blog/portfolio#project-conception"}
								>
									Project conception
								</Link>
								<ol className="mt-1 space-y-1 pl-4">
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#identifying-the-need"
											}
										>
											Identifying the need
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="text-indigo-500 hover:text-indigo-700 hover:underline"
									href={
										"/blog/portfolio#architectural-blueprint"
									}
								>
									Architectural blueprint
								</Link>
								<ol className="mt-1 space-y-1 pl-4">
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#techonology-stack-breakdown"
											}
										>
											Techonology Stack Breakdown
										</Link>
									</li>
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#system-design"
											}
										>
											System Design
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="text-indigo-500 hover:text-indigo-700 hover:underline"
									href={
										"/blog/portfolio#putting-it-all-together"
									}
								>
									Putting it all together
								</Link>
								<ol className="mt-1 space-y-1 pl-4">
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#deployment-and-maintenance"
											}
										>
											Deployment and Maintenance
										</Link>
									</li>
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={"/blog/portfolio#showcase"}
										>
											Showcase
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="text-indigo-500 hover:text-indigo-700 hover:underline"
									href={
										"/blog/portfolio#conclusion-the-journey-and-beyond"
									}
								>
									Conclusion: The Journey and Beyond
								</Link>
								<ol className="mt-1 space-y-1 pl-4">
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#project-summary"
											}
										>
											Project Summary
										</Link>
									</li>
									<li>
										<Link
											className="text-indigo-500 hover:text-indigo-700 hover:underline"
											href={
												"/blog/portfolio#future-enhancements"
											}
										>
											Future Enhancements
										</Link>
									</li>
								</ol>
							</li>
							<li>
								<Link
									className="text-indigo-500 hover:text-indigo-700 hover:underline"
									href={"/blog/portfolio#related-links"}
								>
									Related links
								</Link>
							</li>
						</ol>
					</div>
					<h2
						id="project-conception"
						className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl"
					>
						Project conception
					</h2>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Identifying the need
					</h3>
					<p>
						I created this portfolio website as a way to{" "}
						<strong>showcase my skills</strong> and experience in a
						visually appealing and informative way.
					</p>
					<ol className="list-disc space-y-3 pl-6">
						<li className="pl-2">
							<p>
								<strong className="mr-0.5 whitespace-nowrap">
									My goal:
								</strong>{" "}
								My goal is to connect with potential clients,
								employers, or collaborators who are looking for
								someone with my skillset in Software Development
								(Front-End, Back-End, Full-Stack).
							</p>
						</li>
						<li className="pl-2">
							<p>
								<strong className="mr-0.5 whitespace-nowrap">
									This platform:
								</strong>{" "}
								Allows me to share my work in a comprehensive
								format, highlighting the projects I&apos;m most
								proud of and the unique value I can bring to the
								table.
							</p>
						</li>
					</ol>
					<h2 className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl">
						Architectural Blueprint: Building the Foundation
					</h2>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Technology Stack Breakdown
					</h3>
					<p className="lead">
						To ensure the project&apos;s{" "}
						<strong>functionality and scalability,</strong> a
						well-defined technology stack was chosen. This included
						utilizing <strong>Next.js, TypeScript,</strong> and{" "}
						<strong>Tailwindcss</strong> for [explain their purpose
						in the project].
					</p>
					<ul className="list-disc space-y-3 pl-6">
						<li>
							<p>
								<strong className="mr-0.5 whitespace-nowrap">
									Next.js:
								</strong>{" "}
								Next.js
							</p>
						</li>
						<li>
							<p>
								<strong className="mr-0.5 whitespace-nowrap">
									TypeScript:
								</strong>{" "}
								TypeScript
							</p>
						</li>
						<li>
							<p>
								<strong className="mr-0.5 whitespace-nowrap">
									Tailwindcss:
								</strong>{" "}
								Tailwindcss
							</p>
						</li>
					</ul>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						System Design
					</h3>
					<p className="lead">
						The overall system architecture was designed with
						modularity and maintainability in mind. This involved
						creating well-defined components responsible for showing
						the main habilities and experience involved in this
						project. Also worked keeping in mind the{" "}
						<strong>SOLID principles</strong> that could be
						independently developed and tested.
					</p>
					<figure className="mt-5 flex flex-col items-center gap-4">
						<Image
							src="/projects/portfolio/blog/system_design.webp"
							alt="Figma System Design"
							width={400}
							height={400}
							quality={100}
							blurDataURL="/projects/portfolio/blog/system_design.webp"
							className="rounded-lg shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]"
						/>
						<figcaption className="text-sm text-neutral-400">
							Design system by{" "}
							<Link
								href={"https://www.figma.com/design-systems/"}
								title="Figma"
								aria-label="Figma"
								className="text-indigo-500 underline hover:text-indigo-700"
							>
								Figma.
							</Link>
						</figcaption>
					</figure>
					<h2 className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl">
						Putting it all together
					</h2>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Deployment and Maintenance
					</h3>
					<p className="lead">
						To ensure the project&apos;s{" "}
						<strong>functionality and scalability,</strong> a
						well-defined technology stack was chosen. This included
						utilizing <strong>Next.js, TypeScript,</strong> and{" "}
						<strong>Tailwindcss</strong> for [explain their purpose
						in the project].
					</p>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Showcase
					</h3>
					<p className="lead">
						The completed project was then showcased through
						[mention methods used, e.g., user testing, live
						demonstrations]. This allowed for valuable feedback and
						user validation of the project&apos;s effectiveness.
					</p>
					<h2 className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl">
						Conclusion: The Journey and Beyond
					</h2>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Project Summary
					</h3>
					<p className="lead">
						This project successfully addressed the identified need
						by [summarize the key accomplishment of your project].
						The chosen technology stack and system design proved to
						be effective in [mention a success related to the
						technology choices].
					</p>
					<h3 className="font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-2xl">
						Future Enhancements
					</h3>
					<p className="lead">
						Building upon this success, future enhancements are
						planned to further improve the project by [mention 1-2
						potential improvements]. This project serves as a strong
						foundation for ongoing development and continuous
						improvement.
					</p>
					<h2 className="mt-8 font-montserrat text-xl font-extrabold leading-tight text-neutral-800 lg:text-3xl">
						Related links
					</h2>
					<p className="lead">
						Here are the links for the portfolio project (
						<Link
							className="text-indigo-500 hover:text-indigo-700 hover:underline"
							href={"https://github.com"}
						>
							Github
						</Link>{" "}
						and{" "}
						<Link
							className="text-indigo-500 hover:text-indigo-700 hover:underline"
							href={"https://www.figma.com"}
						>
							Figma
						</Link>
						).
					</p>
					<div className="flex gap-4">
						<div className="group flex w-full flex-col gap-1 rounded-2xl border border-neutral-300 p-4 duration-500 ease-out hover:translate-y-2 hover:border-indigo-500 hover:bg-indigo-200 hover:shadow-lg">
							<div className="mb-2 flex items-center gap-2 group-hover:text-indigo-700">
								<GitHubIcon className="h-5 w-5" />
								<span className="font-montserrat text-xl font-bold">
									GitHub repository
								</span>
							</div>
							<p className="text-sm group-hover:text-indigo-500">
								Here is the link to the{" "}
								<strong>GitHub repository</strong> for this
								project.
							</p>
							<p className="text-sm group-hover:text-indigo-500">
								Feel free to check it out and use it for free if
								that&apos;s the case.
							</p>
							<Link
								href={
									"https://github.com/DanielPenalozaB/portfolio"
								}
								target="_blank"
								title="Open code"
								aria-label="Open code"
								className="mt-2 flex w-fit items-center gap-2 rounded-lg px-3 py-2 font-montserrat text-sm font-medium text-indigo-500 duration-300 ease-out hover:bg-indigo-500 hover:text-white"
							>
								Open code
								<ArrowUpRightSquareIcon className="h-3.5 w-3.5" />
							</Link>
						</div>
						<div className="group flex w-full flex-col justify-between gap-1 rounded-2xl border border-neutral-300 p-4 duration-500 ease-out hover:translate-y-2 hover:border-indigo-500 hover:bg-indigo-200 hover:shadow-lg">
							<div className="flex flex-col gap-1">
								<div className="mb-2 flex items-center gap-2 group-hover:text-indigo-700">
									<GitHubIcon className="h-5 w-5" />
									<span className="font-montserrat text-xl font-bold">
										Figma project
									</span>
								</div>
								<p className="text-sm group-hover:text-indigo-500">
									Here is the link to the{" "}
									<strong>Figma file</strong> for this
									project.
								</p>
							</div>
							<Link
								href={
									"https://github.com/DanielPenalozaB/portfolio"
								}
								target="_blank"
								title="Open file"
								aria-label="Open file"
								className="mt-2 flex w-fit items-center gap-2 rounded-lg px-3 py-2 font-montserrat text-sm font-medium text-indigo-500 duration-300 ease-out hover:bg-indigo-500 hover:text-white"
							>
								Open file
								<ArrowUpRightSquareIcon className="h-3.5 w-3.5" />
							</Link>
						</div>
					</div>
				</article>
			</div>
		</>
	);
}
