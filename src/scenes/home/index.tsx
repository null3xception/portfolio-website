import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/name.png";
import HomePageGraphic from "@/assets/mypic.png";
import { motion } from "framer-motion";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

    return (
        <section id="home" className="gap-14 bg-white-100 md:py-20 xs:p-1 md:h-full md:w-full md:pb-0 
        bg-watermark bg-contain bg-no-repeat bg-bottom">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 xxl:mt-32 xl:mt-48 sm:mt-32 xs:mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div
                className="md:mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="relative">
                    <h1 className="md:mt-5 font-bold text-xl">
                        HELLO, <span className="text-brown-75">MY NAME IS</span>
                    </h1>
                </div>
                <div className="relative">
                    <img alt="home-page-text" src={HomePageText}/>
                </div>
                <h1 className="mt-3 font-bold text-lg xs:mt-1">
                I'M A <span className="text-brown-75 text-3xl font-caveat">Software Developer</span>
                </h1>
                <p className="mt-5 xxl:text-base xl:text-sm">
                Hi! I’m a computer science graduate with a deep passion for programming and application development. 
                I thrive on the challenges and creativity that programming offers. My journey in computer science has fueled my 
                enthusiasm for crafting innovative solutions and constantly exploring new technologies. Whether it's developing 
                interactive games, working with modern APIs, or designing user-friendly applications, I’m dedicated to turning 
                ideas into functional and exciting digital experiences.
                </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
                className="mt-2 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <button className="mt-3 mr-2 px-3.5 py-1.5 rounded-full border-2 border-black-75 text-black-75 hover:bg-brown-50 hover:white-100"
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://portfolio-website-geser-yanga.vercel.app/CV.pdf';
                    link.download = 'CV.pdf';
                    link.click();
                    link.remove();
                }}>
                    DOWNLOAD CV
                </button>
            </motion.div>
            </div>

            {/* IMAGE */}
            <div
            className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
            >
            <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>
           
        </section>
        );
    };

export default Home;