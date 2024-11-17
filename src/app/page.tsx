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
import { technologies, FIVERR_URL, LINKEDIN_URL } from "@/constants";
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
        id="testimonials"
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
        <div className="z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((techCategory) => (
            <div key={techCategory.category}>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                {techCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {techCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-4"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-16 w-16"
                    />
                    <span className="font-montserrat text-lg font-medium text-neutral-800">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
            <path d="M513.912 567.941C515.377 568.289 517.054 568.802 518.941 569.315C520.828 569.856 522.936 570.406 525.208 571.102C527.47 571.826 529.917 572.605 532.527 573.448C533.838 573.842 535.166 574.337 536.531 574.832C537.896 575.327 539.307 575.831 540.745 576.353C552.234 580.587 565.673 586.47 579.342 593.966C593.02 601.453 606.826 610.644 619.451 620.578C620.238 621.192 621.035 621.806 621.823 622.42C622.593 623.061 623.362 623.693 624.123 624.335C625.653 625.609 627.174 626.882 628.685 628.138C631.672 630.695 634.53 633.325 637.37 635.854C640.1 638.502 642.84 641.041 645.405 643.616C646.669 644.917 647.924 646.2 649.152 647.464C650.379 648.738 651.616 649.957 652.743 651.24C663.489 662.85 673.301 675.332 681.995 688.564C690.689 701.797 698.138 715.845 704.331 730.424C707.473 737.701 710.121 745.178 712.585 752.702C713.19 754.589 713.712 756.496 714.28 758.393C714.82 760.299 715.434 762.186 715.901 764.102L717.349 769.866L718.073 772.743L718.687 775.648C722.049 791.126 724.037 806.878 724.715 822.677C725.301 838.484 724.577 854.329 722.598 869.999L722.241 872.94L721.792 875.864L720.876 881.719C720.592 883.671 720.161 885.605 719.804 887.548C719.429 889.481 719.08 891.433 718.677 893.357C716.973 901.064 715.114 908.743 712.814 916.294C708.288 931.415 702.608 946.187 695.673 960.363C688.72 974.522 680.612 988.102 671.405 1000.9C670.021 1002.93 668.336 1005.02 666.65 1007.25C665.798 1008.36 664.928 1009.5 664.048 1010.65C663.123 1011.77 662.188 1012.9 661.245 1014.04C659.357 1016.3 657.479 1018.62 655.482 1020.74C654.502 1021.82 653.531 1022.88 652.578 1023.92C651.625 1024.96 650.7 1025.99 649.729 1026.92C647.823 1028.82 646.018 1030.59 644.379 1032.15C642.73 1033.72 641.154 1034.99 639.862 1036.07C637.251 1038.18 635.584 1039.25 635.355 1038.76C635.117 1038.25 635.877 1036.84 637.526 1034.65C638.35 1033.56 639.395 1032.28 640.65 1030.82C641.887 1029.35 643.261 1027.62 644.864 1025.76C651.195 1018.25 660.118 1007.57 669.701 993.72C692.861 960.198 708.481 921.344 715.306 881.041C722.168 840.775 720.262 798.915 708.691 760.005C704.477 745.783 698.999 731.955 692.393 718.686C685.742 705.435 677.946 692.77 669.215 680.812C660.475 668.844 650.782 657.581 640.284 647.125C629.748 636.706 618.397 627.112 606.405 618.424C594.403 609.737 581.742 601.975 568.55 595.231C555.339 588.532 541.606 582.878 527.507 578.369C513.408 573.86 498.942 570.506 484.293 568.426C469.644 566.374 454.821 565.741 439.97 566.025C426.64 566.319 413.311 567.29 399.99 568.61C386.669 569.938 373.358 571.579 360.001 573.155C346.652 574.722 333.259 576.234 319.791 577.242C306.324 578.232 292.793 578.736 279.243 578.415C265.693 578.021 252.125 576.784 238.741 574.282C225.374 571.67 212.209 567.867 199.649 562.369C193.401 559.565 187.336 556.348 181.519 552.738C175.72 549.1 170.159 545.068 164.909 540.66C159.669 536.234 154.758 531.414 150.233 526.236C145.725 521.049 141.658 515.469 138.085 509.567C131.443 498.46 126.66 486.108 124.718 473.205C124.599 472.399 124.462 471.601 124.361 470.786C124.278 469.952 124.159 469.127 124.114 468.293C123.985 466.634 123.921 464.967 123.94 463.308C123.967 459.991 124.26 456.683 124.819 453.42C125.937 446.905 127.998 440.499 131.333 434.644C133 431.72 134.979 428.934 137.343 426.433C139.688 423.922 142.491 421.75 145.615 420.101C148.73 418.433 152.23 417.406 155.757 417.076C159.247 416.765 162.93 417.003 166.357 418.176C169.783 419.303 172.953 421.145 175.582 423.491C178.248 425.819 180.456 428.577 182.188 431.565C185.687 437.53 187.455 444.366 187.483 451.258C187.464 454.703 186.979 458.176 185.962 461.53C185.421 463.198 184.798 464.848 183.983 466.415L183.369 467.588C183.149 467.972 182.911 468.348 182.682 468.724C182.233 469.503 181.702 470.172 181.18 470.859C177.085 476.412 171.533 480.838 165.349 483.624C159.183 486.465 152.523 488.032 145.844 488.362C139.166 488.692 132.46 487.922 126.019 486.089C124.416 485.622 122.831 485.045 121.255 484.486L118.965 483.523C118.195 483.212 117.435 482.882 116.702 482.506C115.218 481.791 113.725 481.077 112.295 480.243C111.581 479.84 110.848 479.455 110.143 479.024L108.045 477.723C102.474 474.213 97.4174 470.043 92.7267 465.571C88.0361 461.09 83.7119 456.289 79.6626 451.322C77.638 448.838 75.6591 446.318 73.7444 443.771C71.8297 441.223 70.0249 438.602 68.1559 436.018C55.4125 418.094 44.373 398.978 35.1842 379.019C26.0411 359.033 18.6937 338.258 13.1327 317.035C7.56264 295.802 3.77899 274.121 1.74516 252.283C-0.22453 230.437 -0.407762 208.444 1.13135 186.569C2.53304 165.978 5.70287 141.227 11.218 119.224C11.8135 116.961 12.464 114.505 13.1419 111.912C13.8565 109.328 14.4795 106.56 15.3864 103.774C17.1271 98.1843 18.8128 92.1637 20.9749 86.308C22.0101 83.3664 23.0087 80.4157 24.0714 77.5382C25.1983 74.6883 26.3068 71.8841 27.3878 69.1716C27.9284 67.8154 28.4597 66.4866 28.9728 65.1854C29.4858 63.8841 30.0904 62.647 30.6218 61.4191C31.712 58.9815 32.7381 56.6813 33.6909 54.5645C35.2666 50.8806 37.1905 47.2701 38.977 43.6229C39.8748 41.7993 40.7634 39.9848 41.6521 38.1795C42.5957 36.4018 43.5302 34.6515 44.4463 32.9195C48.5231 24.8737 52.4167 18.6148 55.3942 13.6755C56.1271 12.4292 56.8966 11.3204 57.5929 10.294C58.2983 9.26767 58.9579 8.32382 59.5534 7.45325C60.7627 5.73045 61.7796 4.33755 62.6041 3.27455C65.9114 -0.986635 66.1954 0.0122186 63.9051 5.67547C62.9065 8.15886 65.1235 6.00537 60.7169 13.4097C60.5337 13.7121 60.1764 14.3261 60.0115 14.6102C58.4907 17.506 56.9516 20.3926 55.3758 23.27C54.588 24.7088 53.7909 26.1474 53.003 27.5862C52.261 29.0524 51.5097 30.5186 50.7677 31.994C49.256 34.9172 47.7352 37.8497 46.2145 40.7913C44.7761 43.7787 43.3378 46.7661 41.8994 49.7626C41.1849 51.2655 40.4062 52.7409 39.7465 54.2621L37.731 58.8349L35.6972 63.4168C35.0284 64.9471 34.3047 66.4591 33.7183 68.0262C31.2539 74.2576 28.6704 80.4615 26.5816 86.867C21.2039 102.482 16.7606 118.436 13.4717 134.629C10.2011 150.831 7.93825 167.225 6.66482 183.701L6.23424 189.887L6.01436 192.975C5.95023 194.001 5.94107 195.037 5.89526 196.072C5.76701 200.205 5.6021 204.329 5.50133 208.462L5.54713 220.861C5.51965 222.932 5.67539 224.993 5.73952 227.055L5.98688 233.25C6.8114 249.754 8.63451 266.203 11.4562 282.487L13.7557 294.666L16.5041 306.753C16.9256 308.778 17.5119 310.758 18.0341 312.755L19.6282 318.739C20.6267 322.753 21.9277 326.675 23.1278 330.625C28.0383 346.396 33.9474 361.846 40.8642 376.847C47.8727 391.803 55.8705 406.282 64.8395 420.128C73.8818 433.892 83.4829 447.519 94.9438 459.093C101.989 466.149 109.877 472.371 118.718 476.641C123.142 478.795 127.723 480.408 132.487 481.324C137.251 482.25 142.143 482.534 146.971 482.158C151.799 481.773 156.563 480.719 160.997 478.914C165.431 477.109 169.517 474.543 172.889 471.244L174.107 469.961C174.501 469.521 174.95 469.136 175.28 468.651C175.967 467.707 176.746 466.79 177.369 465.828C178.615 463.913 179.577 461.814 180.245 459.606C181.592 455.18 181.812 450.369 181.033 445.713C180.254 441.067 178.505 436.559 175.866 432.728C173.237 428.907 169.673 425.773 165.505 424.169C163.425 423.363 161.226 422.932 158.991 422.877C156.71 422.804 154.456 423.106 152.294 423.739C147.961 424.994 144.085 427.707 140.98 431.198C137.856 434.699 135.437 438.914 133.66 443.386C131.901 447.876 130.728 452.632 130.178 457.452C129.656 462.291 129.656 467.111 130.481 471.922C131.214 476.797 132.359 481.608 133.889 486.3C137.242 496.582 142.473 506.222 148.968 514.955C155.473 523.698 163.223 531.56 171.826 538.516L171.533 538.277C180.575 545.462 190.543 551.473 201.06 556.229C211.559 560.976 222.717 564.431 234.041 566.933C255.506 571.689 277.979 572.816 300.415 572.046C322.888 571.295 345.379 568.591 367.833 565.906C390.288 563.23 412.77 560.6 435.179 559.913C446.374 559.574 457.542 559.693 468.59 560.564C469.974 560.674 471.348 560.793 472.731 560.903C474.105 561.004 475.489 561.123 476.854 561.315C479.593 561.645 482.323 561.984 485.044 562.314C487.756 562.754 490.458 563.185 493.152 563.624L495.167 563.954L497.174 564.358C498.511 564.623 499.84 564.898 501.168 565.164C504.521 565.732 509.019 566.777 513.912 567.941Z" />
          </svg>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
