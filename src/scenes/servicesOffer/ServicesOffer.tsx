import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  heading: string;
  imageHeader: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
  cornerImage: string;
};

const ServicesOffer = ({ heading, imageHeader, title, description, setSelectedPage, cornerImage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      whileHover={{
        translateY: -25,
        transition: { duration: 0.1 },
      }}
      className="mt-5 rounded-md bg-white-75/50 drop-shadow-xl p-5 text-left"
    >
      {/* Heading and ImageHeader */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{heading}</h3>
          <img alt={`${imageHeader}`} src={imageHeader}/>
      </div>

      {/* Title */}
      <h4 className="mt-4 font-bold text-4xl font-inter text-pretty md:w-96">{title}</h4>

      {/* Description */}
      <p className="mt-2 mb-3">{description}</p>

      {/* Learn More and Corner Image */}
      <div className="flex justify-between items-center mt-4">
        <AnchorLink
          className="flex items-center text-sm font-bold text-primary-500 hover:underline"
          onClick={() => setSelectedPage(SelectedPage.ContactMe)}
          href={`#${SelectedPage.ContactMe}`}
        >
          <p className="mr-2">Learn More</p>
          <ArrowRightIcon className="h-5 w-5" />
        </AnchorLink>
        <div className="ml-auto">
        <img alt={`${cornerImage}`} src={cornerImage}/>
        </div>
      </div>
    </motion.div>
  );
};
export default ServicesOffer;
