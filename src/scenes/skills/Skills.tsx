import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
    title: string;
    percentage: string;
    description: string;
    bar: string;
};

const Skill = ({ title, percentage, description, bar }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      variants={childVariant}
      className="rounded-md bg-transparent p-5 text-left"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-black font-inter">{title}</h4>
            <h3 className="text-lg font-black">{percentage}
              <span className="font-inter text-2xl font-black text-brown-75">%</span>
              </h3>
      </div>

      {/* Description */}
      <p className="mt-2 mb-3 text-base text-wrap">{description}</p>
      <div className="flex justify-between items-center">
        <img alt={`${bar}`} src={bar} 
        className="w-full object-contain
                   mt-5
                   xxl:mx-10 
                   sm:mx-5"/>
      </div>
    </motion.div>
  );
};
export default Skill;
