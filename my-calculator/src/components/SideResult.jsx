import React from "react";

const SideResult = () => {
  return (
    <div className="flex flex-col  w-[400px] h-[300px] mx-5 my-10 bg-slate-500 rounded-xl ">
      <div className="flex w-[350px] justify-between  m-8 ">
        <div>
          <div>Tip Amount</div>
          <div>/ Person</div>
        </div>
        <div>
          <div>$0.00</div>
        </div>
      </div>
      <div className="flex w-[350px] justify-between  my-5 mx-8 ">
        <div>
          <div>TOTAL</div>
          <div>/ Person</div>
        </div>
        <div>
          <div>$0.00</div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mx-8">
        <button className="bg-red-500 w-[500px] h-[50px] rounded-lg">
          RESET
        </button>
      </div>
    </div>
  );
};

export default SideResult;
