import React from "react";
import { useTipCalculatorContext } from "../contexts/Tipcalcalator";

const SideSelect = () => {
  const {
    custom,
    setCustom,
    bill,
    setBill,
    selectedPercent,
    setSelectedPercent,
    people,
    setPeople,
    price,
    setPrice,
    CustomInput,
    SetPeople,
    SetBill,
    selectPercent,
    handleCustomInput,
    calculateTipPerPerson,
  } = useTipCalculatorContext();

  return (
    <div className="flex flex-col w-[400px] h-[300px] mx-5 my-10 bg-slate-500 rounded-xl">
      <div className="mx-2">
        <div className="flex flex-col">
          <div>Bill</div>
          <input
            type="number"
            className="w-[300px] bg-blue-300 rounded-sm"
            value={bill}
            onChange={SetBill}
          ></input>
        </div>
        <div className="flex flex-col my-5">
          <div>Select Tip %</div>
          <div className="grid grid-cols-3 gap-2">
            {[5, 10, 15, 25, 50].map((percent) => (
              <button
                key={percent}
                className="w-[100px] bg-emerald-300"
                onClick={() => selectPercent(percent)}
              >
                <div> {percent}% </div>
              </button>
            ))}
            <button className="w-[100px] bg-emerald-300" onClick={CustomInput}>
              {custom ? (
                <div> Custom </div>
              ) : (
                <input
                  type="number"
                  className="w-[100px]"
                  onChange={(e) => {
                    handleCustomInput(e);
                  }}
                ></input>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col my-5">
          <div>Number of People</div>
          <input
            type="number"
            className="w-[300px] bg-blue-300 rounded-sm"
            value={people}
            onChange={SetPeople}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SideSelect;
