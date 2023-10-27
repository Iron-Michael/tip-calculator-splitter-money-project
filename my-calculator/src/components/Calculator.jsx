import React from "react";
import SideSelect from "./SideSelect";
import SideResult from "./SideResult";

const Calculator = () => {
  return (
    <div className="flex w-[800px] h-[400px] justify-center bg-white rounded-xl">
      <SideSelect />
      <SideResult />
    </div>
  );
};

export default Calculator;
