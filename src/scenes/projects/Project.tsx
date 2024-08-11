type Props = {
    title: string;
    tech: string;
    description: string;
    image: string;
  };
  
  const Project = ({ title, tech, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-20 flex
    xxl: h-[350px] xxl:w-[600px]
    xl: h-[350px] xl:w-[600px]
    lg: h-[350px] lg:w-[600px]
    flex-col items-center justify-center
    whitespace-normal bg-brown-75 text-center text-white
    opacity-0 transition duration-500 hover:opacity-95 rounded-3xl`;
  
    return (
    <li className="relative mx-5 inline-block 
                  xxl: h-[350px] xxl:w-[600px]
                  xl:w-[600px]
                  lg:w-[600px] 
                  xs:h-[350px] xs:w-[300px]">
        <div className={overlayStyles}>
          <h1 className="mb-3 text-white-100 font-black font-inter
                        xxl:text-3xl
                        xs:text-xl">{title}</h1>
          <h2 className="text-white-100 font-black
                        xxl:text-xl
                        xs:text-base">{tech}</h2>
          <p className="mt-5  text-white-100 
                        xxl:text-base
                        xs:text-sm">{description}</p>
        </div>
        <img alt={`${image}`} src={image} className="rounded-3xl z-10
                                                    xxl: h-[350px] xxl:w-[600px]
                                                    xl:w-[600px]
                                                    lg:w-[600px] 
                                                    xs:h-[350px] xs:w-[300px]"/>
      </li>
    );
  };
  
  export default Project