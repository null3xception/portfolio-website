import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="flex justify-center 
    items-center font-montserrat 
    text-4xl font-inter
    font-black
    mt-16
    xs:mx-5">
      {children}
      </h1>
  );
};

export default HText;  