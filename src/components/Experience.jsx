import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-sky-500 "
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* This is how you can add multiple experiences */}
          <Details
            position="Lead Engineer"
            company="Rapid Innovation"
            companyLink="https://rapidinnovation.io/"
            time="2023-Present"
            address="Remote"
            work="As a Lead Engineer,I successfully designed and implemented smart contracts, developed decentralized applications (DApps), and integrated blockchain technology into diverse systems.My expertise in Solidity, Ethereum, and other blockchain platforms enabled you to deliver secure and efficient solutions for tokenization, NFTs, DeFis, and other blockchain-based projects."
          />
          <Details
            position="Blockchain Developer"
            company="Rapid Innovation"
            companyLink="https://rapidinnovation.io/"
            time="2021-2023"
            address="Remote"
            work="As a blockchain developer,I successfully designed and implemented smart contracts, developed decentralized applications (DApps), and integrated blockchain technology into diverse systems.My expertise in Solidity, Ethereum, and other blockchain platforms enabled you to deliver secure and efficient solutions for tokenization, NFTs, DeFis, and other blockchain-based projects."
          />
          <Details
            position="Intern"
            company="Rapid Innovation"
            companyLink="https://rapidinnovation.io/"
            time="2021"
            address="Remote"
            work="As a Intern,I successfully designed and implemented smart contracts, developed decentralized applications (DApps), and integrated blockchain technology into diverse systems.My expertise in Solidity, Ethereum, and other blockchain platforms enabled you to deliver secure and efficient solutions for tokenization, NFTs, DeFis, and other blockchain-based projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
