import HText from "@/shared/HText";
import { ServicesType, SelectedPage } from "@/shared/types";
import Desktop from "@/assets/iMac.png"
import Controller from "@/assets/controller.png"
import CornerImage from "@/assets/Dots.png"
import Bot from "@/assets/Bot.png"
import { motion } from "framer-motion";
import Service from "./ServicesOffer";

const services: Array<ServicesType> = [
  {
    heading: "SOFTWARE DEVELOPMENT",
    imageHeader: Desktop,
    title: "Windows & Mac Applications",
    description:
      "High-quality applications are developed for both Windows and Mac platforms. Services cover the entire development process, from design and coding to testing and deployment, with a strong focus on user experience, performance, and functionality.",
    cornerImage: CornerImage
  },
  {
    heading: "GAME DEVELOPMENT",
    imageHeader: Controller,
    title: "Unity Game Engine & Pygame",
    description:
      "Simple 2D games are developed using Unity and Pygame, covering design, coding, testing, and deployment for engaging and polished experiences. Unity offers advanced tools, while Pygame is ideal for straightforward 2D projects.",
    cornerImage: CornerImage
  },
  {
    heading: "ARTIFICIAL INTELLIGENCE & ROBOTICS",
    imageHeader: Bot,
    title: "Machine Learning & Arduino",
    description:
      "Machine learning models and Arduino projects are developed to create intelligent systems and interactive hardware. Includes designing, coding, and integrating machine learning algorithms with Arduino for innovative solutions and real-time applications.",
    cornerImage: CornerImage
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

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="bg-white-100">
      <div className="mx-auto min-h-full w-11/12 py-20 bg-services bg-contain bg-no-repeat bg-bottom">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
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
          <HText>WHAT I DO</HText>
          <p className="my-5 text-xl md:pb-14 font-bold text-brown-75">
              MY <span className="font-caveat text-5xl text-black-75">Services</span>
          </p>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            className="mt-5 flex gap-6 m-20 
            xs:flex-col xs:m-10 
            md:flex-col 
            xl:flex-col 
            xxl:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
          {services.map((service: ServicesType) => (
            <Service
              key={service.title}
              heading={service.heading}
              imageHeader={service.imageHeader}
              title={service.title}
              description={service.description}
              setSelectedPage={setSelectedPage}
              cornerImage={service.cornerImage}
            />
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;