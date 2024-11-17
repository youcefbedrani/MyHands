import {
  ChevronIcon,
  FiverrIcon,
  GridIcon,
  ImagePlaceholder,
  LinkedInFullIcon,
  LongArrowIcon,
} from "@/assets/svg";
import {
  ContactSection,
  ExperienceSection,
  ProjectSection,
} from "@/components";
import { FIVERR_URL, LINKEDIN_URL } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-48"
      >
        <div className="flex w-full max-w-[1000px] items-center gap-24 px-4 max-lg:flex-col">
          <div className="flex w-full max-w-[521px] flex-col gap-7">
            <div className="flex items-center gap-4">
              <Link
                href={LINKEDIN_URL}
                target={"_blank"}
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group max-h-8 w-fit rounded-2xl bg-gradient-to-br from-linkedin-400 via-linkedin-200 to-linkedin-400 p-0.5 duration-500 ease-out hover:scale-110 hover:bg-gradient-to-t hover:from-linkedin-200 hover:via-linkedin-300 hover:to-linkedin-200"
              >
                <div className="relative flex w-[82px] items-center gap-1 rounded-full bg-linkedin-200 px-2 py-1.5 leading-4 text-linkedin duration-500 ease-out group-hover:w-[95px] group-hover:bg-linkedin-100">
                  <LinkedInFullIcon className="h-4 min-w-[63px]" />
                  <ChevronIcon className="h-3 w-3 rotate-90" />
                </div>
              </Link>
              <Link
                href={FIVERR_URL}
                target={"_blank"}
                rel="noopener noreferrer"
                title="Fiverr"
                className="group w-fit rounded-2xl bg-gradient-to-br from-fiverr-400 via-fiverr-200 to-fiverr-400 p-0.5 duration-500 ease-out hover:scale-110 hover:bg-gradient-to-t hover:from-fiverr-200 hover:via-fiverr-300 hover:to-fiverr-200"
              >
                <div className="relative flex max-h-8 w-[62px] items-center gap-1 rounded-full bg-fiverr-200 px-2 py-1.5 leading-4 text-fiverr duration-500 ease-out group-hover:w-[77px] group-hover:bg-fiverr-100">
                  <FiverrIcon className="h-3.5 min-h-[0.875rem] w-11 min-w-[2.75rem]" />
                  <ChevronIcon className="h-3 w-3 rotate-90" />
                </div>
              </Link>
            </div>
            <h1 className="font-montserrat text-5xl font-bold text-neutral-800">
              Hi, Here is Bedrani Mohammed Adel I&apos;m a Web & Mobile
              Developer
            </h1>
            <span className="text-xl font-medium leading-6 text-neutral-500 italic animate-fadeIn">
              &quot;Every great developer you know got there by solving problems
              they were unqualified to solve until they actually did it.&quot; –
              Patrick McKenzie
            </span>
            <div className="flex gap-4">
              <Link
                href={"/projects"}
                rel="noopener noreferrer"
                title="View projects"
                className="rounded-lg px-4 py-2.5 font-semibold leading-6 text-indigo-500 outline outline-2 outline-indigo-500 duration-150 ease-in hover:text-indigo-400 hover:outline-indigo-400"
              >
                View projects
              </Link>
              <Link
                href={"#work-with-me"}
                rel="noopener noreferrer"
                title="Contact me"
                className="rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-white duration-150 ease-in hover:bg-indigo-400"
              >
                Contact me
              </Link>
            </div>
          </div>
          <div className="relative flex h-full w-[calc(100%-4rem)] items-center justify-center rounded-lg bg-neutral-200 max-2xl:mr-[3.75rem] lg:w-full">
            <div className="w-full h-[351px] flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/doszhdiv2/image/upload/v1731840594/moxxldjgoplxzai490wq.jpg"
                alt="Image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-[50px] -right-[50px]">
              <div className="relative h-[230px] w-[150px]">
                <div className="absolute left-[50px] top-0 h-[180px] w-[100px] rounded-lg bg-indigo-200" />
                <div className="absolute left-0 top-[130px] h-[100px] w-[100px] rounded-lg bg-indigo-300" />
                <div className="absolute left-[50px] top-[130px] h-[50px] w-[50px] rounded-bl-lg rounded-tr-lg bg-indigo-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="radial-gradient absolute right-[calc(50%-1920px)] top-[calc(100%-1920px)] z-[-1] h-[1920px] w-[1920px] rounded-full" />
        <GridIcon className="radial-mask absolute -left-[21rem] -top-[2.9rem] -z-10 h-[37rem] w-full opacity-25" />
      </section>
      <ProjectSection />
      <ExperienceSection />
      <section
        id="skills"
        className="relative flex w-full flex-col items-center justify-center gap-8 px-4 py-48"
      >
        <div className="z-10 flex flex-col gap-6 md:items-center">
          <h1 className="font-montserrat text-5xl font-bold text-neutral-800">
            My Skills
          </h1>
          <p className="font-montserrat text-xl font-medium text-neutral-500">
            These are the tools and technologies I excel at
          </p>
        </div>

        {/* Skill Icons Section */}
        <div className="z-10 grid grid-cols-2 gap-8 pt-14 md:grid-cols-3 lg:grid-cols-4">
          {/* Skill 1 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/react.svg"
              alt="React"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              React.js
            </span>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center gap-4">
            <img src="/assets/icons/vue.svg" alt="Vue" className="h-16 w-16" />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              Vue.js
            </span>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/laravel.svg"
              alt="Laravel"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              Laravel
            </span>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/docker.svg"
              alt="Docker"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              Docker
            </span>
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/typescript.svg"
              alt="TypeScript"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              TypeScript
            </span>
          </div>

          {/* Skill 6 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/tailwind.svg"
              alt="Tailwind"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              Tailwind CSS
            </span>
          </div>

          {/* Skill 7 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/devops.svg"
              alt="DevOps"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              DevOps
            </span>
          </div>

          {/* Skill 8 */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/icons/flutter.svg"
              alt="Flutter"
              className="h-16 w-16"
            />
            <span className="font-montserrat text-lg font-medium text-neutral-800">
              Flutter
            </span>
          </div>
        </div>

        {/* Decorative Background SVG */}
        <div className="absolute -top-96 left-0 z-0 h-[1920px] w-full overflow-hidden fill-indigo-300 sm:left-1/2 sm:-translate-x-1/2">
          <svg
            width="1507.93"
            height="2160"
            viewBox="0 0 725 1039"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[105deg] fill-indigo-300/80"
            preserveAspectRatio="none"
          >
            <path d="M513.912 567.941C515.377..."></path>
          </svg>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
