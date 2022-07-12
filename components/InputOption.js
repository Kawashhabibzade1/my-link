/** @format */

import React from "react";

const InputOption = ({ title, Icons, color }) => {
  return (
    <>
      <div className="flex  items-center hover:bg-[#F5F5F5] p-[0.8rem] cursor-pointer">
        <Icons style={{ color: color }} />
        <h4 className="ml-1 font-semibold">{title}</h4>
      </div>
    </>
  );
};

export default InputOption;
