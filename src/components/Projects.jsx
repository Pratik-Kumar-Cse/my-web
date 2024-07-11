import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import arcadia from "../../public/images/projects/arcadia.png";
import slabs from "../../public/images/projects/slabs.png";
import pixelpark from "../../public/images/projects/pixelpark.png";
import gie from "../../public/images/projects/gie.png";
import wdf from "../../public/images/projects/wdf.png";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-sky-700 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-white sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-[3px] border-solid border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-sky-700 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-white sm:text-sm">
          {summary}
        </p>

        <div className="w-full justify-between mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-[3px] border-solid border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <main
        id="projects"
        className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 
					"
          >
            <div className="col-span-12 hover:scale-105 transition-all duration-500 ease-in-out">
              <FeaturedProjects
                type="Featured Project"
                title="Arcadia"
                summary="This is an Internal project, in Arcadia simplifies the entire meeting lifecycle. It captures notes and tracks engagement analytics during meetings, and provides automated summaries and action item tracking afterward. Advanced features include calendar integration and predictive capabilities."
                img={arcadia}
                link="https://www.arcadiax.ai/"
                github="https://gitlab.rapidinnovation.tech/pk"
              />
            </div>

            <div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-500 ease-in-out">
              <Project
                summary="The WDF suite connects sponsors to veteran dogs they fund through NFT-gated access. This tiered model with recurring fees incentivizes higher donations. Admins manage profiles, while handlers create dog content via a mobile app. Sponsors view the content of the dogs they support based on their NFT tier."
                title="Warrior Dog Foundation (WDF)"
                img={wdf}
                link="https://warriordog.com/"
                github="https://gitlab.rapidinnovation.tech/pk"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-800 ease-in">
              <Project
                summary="Slabs is an exciting NFT marketplace project that allows users to buy and sell physical and virtual clothes as NFTs on the platform. Each physical product has an NFC tag, linking it to its corresponding NFT in the marketplace."
                title="Slabs"
                img={slabs}
                link="https://www.spatial-labs.com/"
                github="https://github.com/Project-slabs"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-800 ease-in">
              <Project
                summary="PixelPark is a new and exciting NFT marketplace that is designed to incentivize collectors, creators and community members. it will be bringing innovation and leading technology to the NFT space. The intuitive user interface and large range of functionalities and services provided on PixelPark will make for a truly unique user experience."
                title="Pixel Park"
                img={pixelpark}
                link="https://docs.powercity.io/ecosystem/pixelpark-nft-marketplace/"
                github="https://github.com/POWERCITYio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 hover:scale-105 transition-all duration-800 ease-in">
              <Project
                summary="GIE is a crypto exchange platform with a custodial wallet for secure token exchanges. It features an AI agent for educational content, a voting system for community decisions, and a subscription service for enhanced user engagement."
                title="GIE-Crypto-Exchange"
                img={gie}
                link="https://giecrypto.com/"
                github="https://github.com/GIE-Crypto-Exchange"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
