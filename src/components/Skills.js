import { motion } from "framer-motion";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 absolute shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light  xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:txt-6xl md:mt-32 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
				md:bg-circularLightMd md:dark:bg-circularDarkMd 
				sm:bg-circularLightSm sm:dark:bg-circularDarkSm "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="20vw" y="-2vw" />
        <Skill name="Javascript" x="-5vw" y="-10vw" />
        <Skill name="Typescript" x="15vw" y="10vw" />
        <Skill name="ReactJS" x="-25vw" y="8vw" />
        <Skill name="NextJS" x="25vw" y="-8vw" />
        <Skill name="ExpressJS" x="0vw" y="15vw" />
        <Skill name="NodeJS" x="10vw" y="-18vw" />
        <Skill name="GraphQL" x="-15vw" y="18vw" />
        <Skill name="Solidity" x="-30vw" y="-12vw" />
        <Skill name="Python" x="-20vw" y="-3vw" />
        <Skill name="HardHat" x="-18vw" y="-20vw" />
        <Skill name="etherJS" x="28vw" y="15vw" />
        <Skill name="Foundry" x="-28vw" y="20vw" />
        <Skill name="Ethereum" x="32vw" y="-5vw" />
        <Skill name="DSA" x="5vw" y="22vw" />
        <Skill name="GenerativeAI" x="-12vw" y="-15vw" />
        <Skill name="LLM" x="22vw" y="5vw" />
        <Skill name="AgentSystem" x="-8vw" y="12vw" />
        <Skill name="AI" x="18vw" y="-12vw" />
        <Skill name="Flask" x="-35vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
