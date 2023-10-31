import React from "react";
import SideSelect from "./SideSelect";
import SideResult from "./SideResult";
import { TipCalculatorProvider } from "../contexts/Tipcalcalator";

const Calculator = () => {
  return (
    <TipCalculatorProvider>
      <div className="flex w-[800px] h-[400px] justify-center bg-white rounded-xl">
        <SideSelect />
        <SideResult />
      </div>
    </TipCalculatorProvider>
  );
};

export default Calculator;
