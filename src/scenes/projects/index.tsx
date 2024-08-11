import { SelectedPage, ProjectType } from "@/shared/types";
import image1 from "@/assets/amudya.png";
import image2 from "@/assets/website.png";
import image3 from "@/assets/clinic.png";
import image4 from "@/assets/sas.png";
import image5 from "@/assets/qrcanteen.png";
import image6 from "@/assets/toaru.png";
import image7 from "@/assets/tax.png";
import image8 from "@/assets/cardioquiz.png";
import image9 from "@/assets/emojiverse.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Project";

const projects: Array<ProjectType> = [
  {
    title: "Project amUdyA",
    tech: "Python, SciKit Learn, CustomTkinter, Pandas",
    description:
      "A library recommender system that uses machine learning to suggest available books based on user preferences and borrowing history. It continuously improves its recommendations by analyzing reading patterns and book attributes.",
    image: image1,
  },
  {
    title: "Portfolio Website",
    tech: "Typescript, ReactJs, Framer Motion, Vite",
    description:
      "A personal platform showcasing all the information and services I offer. It highlights my skills, projects, and achievements, providing potential clients or employers with a comprehensive view of my expertise and professional capabilities.",
    image: image2,
  },
  {
    title: "Clinical Management System",
    tech: "C#, Windows Form App, MySQL, Guna Framework",
    description:
      "A clinical management system that handles patient information and healthcare data through CRUD operations—Create, Read, Update, and Delete. It streamlines administrative tasks, enabling efficient management of medical records, appointments, billing, and patient care.",
    image: image3,
  },
  {
    title: "STEM Admission System",
    tech: "C#, Windows Form App, MySQL, Guna Framework",
    description:
      "A STEM admission system that is designed to manage the application and enrollment process for science, technology, engineering, and mathematics programs. It streamlines student applications, evaluates eligibility, and supports decision-making to ensure a smooth and efficient admission process for both applicants and administrators.",
    image: image4,
  },
  {
    title: "Quick Response Canteen",
    tech: "C#, Windows Form App, MySQL, Guna Framework",
    description:
      "A quick response canteen system that speeds up food ordering and payment processes in a canteen. It allows users to place orders, make payments, and receive their meals swiftly, reducing wait times and improving overall service.",
    image: image5,
  },
  {
    title: "To Aru Platformer",
    tech: "Python, PyGame",
    description:
      "A 2D anime platformer shooting game that combines vibrant anime-style graphics with fast-paced platforming and shooting action. Players navigate through intricately designed levels, jumping, dodging, and shooting",
    image: image6,
  },
  {
    title: "Tax Information System",
    tech: "C#, Windows Form App, MySQL, Guna Framework",
    description:
      "A tax information system that is designed to manage and streamline the collection, processing, and storage of tax-related data. It enables users to file taxes, track payments, and access relevant tax information, ensuring compliance and simplifying the overall tax management process for individuals and businesses.",
    image: image7,
  },
  {
    title: "Cardio Vascular Quiz Game",
    tech: "C#, Unity Game Engine",
    description:
      "A simple cardiovascular 2D board game that features a 2D grid where players engage in strategic movement and actions related to cardiovascular health. The game aims to educate and raise awareness about heart health through engaging gameplay.",
    image: image8,
  },
  {
    title: "EmojiVerse",
    tech: "C#, MAUI, XAML",
    description:
      "A simple emoji app that allows users to browse and copy a wide variety of emojis with ease. It provides a user-friendly interface for quickly selecting and pasting emojis into messages, documents, or social media posts.",
    image: image9,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MyProjects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="bg-white-100 mx-auto md:min-h-full md:w-full py-32
    bg-projects bg-contain bg-no-repeat bg-bottom overflow-x-hidden">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* HEADER */}
        <motion.div
        className="md:my-5 w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
        >
        <HText>PROJECTS</HText>
        <p className="my-5 text-xl font-bold text-brown-75">
            MY <span className="font-caveat text-5xl text-black-75">Cases</span>
        </p>
       </motion.div>
        <div className="mt-32 h-[400px] w-full overflow-x-auto overflow-y-hidden
                        ">
          <ul className="w-[2800px] whitespace-nowrap
                        xxl:pl-0
                        sm:pl-6
                        xs:pl-3">
            {projects.map((project: ProjectType, index) => (
              <Project
                key={`${project.title}-${index}`}
                title={project.title}
                tech={project.tech}
                description={project.description}
                image={project.image}
              />
            ))}
          </ul>
        </div>
        <p className="my-5 text-xl font-bold text-brown-75">
           <span className="flex justify-center 
                            items-center font-caveat 
                            text-3xl text-black-75">
            These are my finished projects                  
            </span>
            <span className="flex justify-center 
                            items-center font-anonymousPro 
                            italic
                            text-sm text-black-75">
            I still have a lot of ongoing projects                  
            </span>
        </p> 
      </motion.div>
    </section>
  );
};

export default MyProjects;