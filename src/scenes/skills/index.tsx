import HText from "@/shared/HText";
import { SkillsType, SelectedPage } from "@/shared/types";
import CSharp from "@/assets/csharpBar.png"
import Python from "@/assets/pythonBar.png"
import SQL from "@/assets/sqlBar.png"
import Typescript from "@/assets/typescriptBar.png"
import Photoshop from "@/assets/photoshopBar.png"
import Figma from "@/assets/figmaBar.png"
import { motion } from "framer-motion";
import Skill from "./Skills";

const skillSets: Array<SkillsType> = [
  {
    id: 1,
    title: "C#",
    percentage: "85",
    description:
      "Proficient in C# with strong skills in programming and problem-solving using this language. Experienced in developing robust applications and optimizing code for performance.",
    bar: CSharp
  },
  {
    id: 2,
    title: "Python",
    percentage: "75",
    description:
      "Skilled in Python with solid programming abilities and experience in developing various applications. Capable of leveraging Python for data analysis, scripting, and automation tasks.",
    bar: Python
  },
  {
    id: 3,
    title: "SQL",
    percentage: "60",
    description:
      "Experienced in SQL with a solid understanding of database management and querying. Able to efficiently handle data manipulation and retrieval tasks.",
    bar: SQL
  },
  {
    id: 4,
    title: "Typescript",
    percentage: "45",
    description:
      "Familiar with TypeScript, with a solid understanding of its syntax and features. Capable of developing and maintaining type-safe code for improved application reliability.",
    bar: Typescript
  },
  {
    id: 5,
    title: "Adobe Photoshop",
    percentage: "60",
    description:
      "Competent in Adobe Photoshop, with a solid understanding of image editing, manipulation, and design. Able to create and enhance visual content effectively.",
    bar: Photoshop
  },
  {
    id: 6,
    title: "Figma",
    percentage: "55",
    description:
      "Proficient in Figma, with a good grasp of design and prototyping tools. Capable of creating and collaborating on user interfaces and design projects.",
    bar: Figma
  },

];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  return (
    <section id="skills" className="bg-white-100">
      <div className="mx-auto min-h-full w-11/12 py-20
      bg-skills bg-contain bg-no-repeat bg-bottom">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {/* HEADER */}
          <motion.div
          className="md:my-5 md:w-full text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
          }}
          >
          <HText>PROFFESIONAL SKILLS</HText>
          <p className="my-5 text-xl font-bold text-brown-75">
              MY <span className="font-caveat text-5xl text-black-75">Talents</span>
          </p>
          </motion.div>
          
          <motion.div
            className="mt-20
            xxl: flex flex-wrap justify-center items-center gap-6 
            xl:flex-wrap
            md:flex-wrap
            sm:flex-wrap
            xs:flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
          {skillSets.map((skill: SkillsType) => (
          <div
            key={skill.id}
            className="
              xxl:w-1/4 
              xl:w-1/4 
              md:w-1/4 
              sm:w-3/4
              xs:w-3/4"
          >
            <Skill
              title={skill.title}
              percentage={skill.percentage}
              description={skill.description}
              bar={skill.bar}
            />
          </div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;