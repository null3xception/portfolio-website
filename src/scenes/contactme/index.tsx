import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactMePic from "@/assets/contactmePic.png";
import FB from "@/assets/fb.png";
import LinkedIn from "@/assets/linkedin.png";
import IG from "@/assets/ig.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
    return (
        <section id="contactme" className="gap-14 bg-white-100 md:py-20 xs:p-1 md:h-full md:w-full md:pb-0 
        bg-contactme bg-contain bg-no-repeat bg-bottom">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 mt-20 md:basis-3/5">
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
                <h1 className="mt-3 font-bold text-4xl xs:text-2xl xs:mt-1">
                Hire Me for Your <span className="text-brown-75 text-6xl font-caveat">Next Project! </span>
                </h1>
                <p className="mt-5 xxl:text-xl xl:text-sm">
                Looking for a skilled developer with expertise in C#, Python, React.js, and Unity? Whether you need a custom application, a simple 2d game, or a responsive website, I'm here to bring your vision to life. Let's collaborate and create something amazing together! Contact me today to discuss your project or commission.
                You can reach out to me through my accounts for inquiries and collaborations below or email me at <span className="font-caveat text-4xl">gjyanga24@gmail.com</span>
                </p>
                <button
                    className="mt-3 mr-5 rounded-full" 
                    onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100083933652429'}
                    >
                    <img alt="linkedin" src={FB} className="size-full"/>
                </button>
                <button
                    className="mt-3 mr-5 rounded-full" 
                    onClick={() => window.location.href = 'https://www.linkedin.com/in/geser-jan-yanga-422451320/'}
                    >
                    <img alt="linkedin" src={LinkedIn} className="size-full"/>
                </button>
                <button
                    className="mt-3 mr-5 rounded-full" 
                    onClick={() => window.location.href = 'https://www.instagram.com/null.exception.error/?next=%2F'}
                    >
                    <img alt="ig" src={IG} className="size-full"/>
                </button>
            </motion.div>
            </div>

            {/* IMAGE */}
            <div
            className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
            >
            <img alt="home-pageGraphic" src={ContactMePic} />
            </div>
        </motion.div>
           
        </section>
    );
};

export default ContactMe;