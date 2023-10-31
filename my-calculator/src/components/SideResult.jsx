import React from "react";

const SideResult = ({ bill, selectedPercent, people }) => {
  const price = (selectedPercent * bill) / 100;
  const tipPerPerson = people !== 0 ? price / people : 0;
  const totalPerPerson = people !== 0 ? (bill + price) / people : 0;

  return (
    <div className="flex flex-col w-[400px] h-[300px] mx-5 my-10 bg-slate-500 rounded-xl">
      <div className="mx-2">
        <div className="flex w-[350px] justify-between m-8">
          <div>
            <div>Tip Amount</div>
            <div>/ Person</div>
          </div>
          <div>
            <div>${tipPerPerson.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex w-[350px] justify-between my-5 mx-8">
          <div>
            <div>TOTAL</div>
            <div>/ Person</div>
          </div>
          <div>
            <div>${totalPerPerson.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex justify-center mt-8 mx-8">
          <button className="bg-red-500 w-[500px] h-[50px] rounded-lg">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideResult;
