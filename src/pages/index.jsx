import About from "../components/About";
import AnimatedHeading from "../components/AnimatedHeading";
import { LinkArrow } from "../components/Icons";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../public/images/profile/photo2.png";
import AnimatedText from "../components/AnimatedText";
export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light pt-32">
        <Layout className="pt-0 md:!pt-16 sm:!pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedHeading
                text="Turning complex problems into elegant solutions with a full-stack approach."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a versatile full-stack developer with expertise in
                blockchain, backend systems, and generative AI, I am dedicated
                to turning innovative ideas into cutting-edge applications.
                Explore my latest projects and articles, showcasing my
                proficiency in blockchain development, decentralized solutions,
                robust backend architectures, and advanced AI implementations.
                My diverse skill set allows me to create comprehensive,
                forward-thinking solutions across multiple domains of modern
                technology.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://docs.google.com/document/d/1o5gybYcabW-W4wPtEAgzcm7VOHpNyFSIPeBoHMKkHeg"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light transition-all ease-in-out duration-300 md:p-2 md:px-4 md:text-base "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:pratikkumar.cs.99@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt=""
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
      </main>
      <About />
      <Projects />
    </>
  );
}
