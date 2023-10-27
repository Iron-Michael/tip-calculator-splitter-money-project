import { useState } from "react";

const SideSelect = () => {
  const [Custom, SetCustom] = useState(true);
  const [Bill, SetBill] = useState(0);
  const [selectedPercent, setSelectedPercent] = useState(0);
  const [people, setPeople] = useState(1);
  const [price, setPrice] = useState(0);

  function CustomInput() {
    SetCustom(false);
  }

  function SetPeople(event) {
    const newPeople = parseInt(event.target.value, 10);
    setPeople(newPeople);
  }

  function SetPrice(event) {
    const newBill = parseFloat(event.target.value);
    SetBill(newBill);
  }

  function selectPercent(percent) {
    SetCustom(true);
    setSelectedPercent(percent);
    setPrice((percent * Bill) / 100);
  }

  function calculateTipPerPerson() {
    if (people === 0) {
      return 0;
    }
    return price / people;
  }
  return (
    <div className="flex flex-col   w-[400px] h-[300px] mx-5 my-10 bg-slate-500 rounded-xl ">
      <div className="mx-2">
        <div className="flex flex-col ">
          <div>Bill</div>
          <input
            type="number" // Use type="number" for the bill input
            className="w-[300px] bg-blue-300 rounded-sm"
            value={Bill}
            onChange={SetPrice}
          ></input>
        </div>
        <div className="flex flex-col  my-5">
          <div>Select Tip %</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              className="w-[100px] bg-emerald-300"
              onClick={() => selectPercent(5)}
            >
              <div> 5% </div>
            </button>
            <button
              className="w-[100px] bg-emerald-300"
              onClick={() => selectPercent(10)}
            >
              <div> 10% </div>
            </button>
            <button
              className="w-[100px] bg-emerald-300"
              onClick={() => selectPercent(15)}
            >
              <div> 15% </div>
            </button>
            <button
              className="w-[100px] bg-emerald-300"
              onClick={() => selectPercent(25)}
            >
              <div> 25% </div>
            </button>
            <button
              className="w-[100px] bg-emerald-300"
              onClick={() => selectPercent(50)}
            >
              <div> 50% </div>
            </button>

            <button className="w-[100px] bg-emerald-300 " onClick={CustomInput}>
              {Custom ? (
                <div> Custom </div>
              ) : (
                <input className="w-[100px]" onChange={Bill}></input>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col  my-5">
          <div>Number of People</div>
          <input
            type="number"
            className="w-[300px] bg-blue-300 rounded-sm"
            value={people}
            onChange={SetPeople}
          ></input>
        </div>
      </div>
      <div className="my-5">
        <div>Tip per Person:</div>
        <div>{calculateTipPerPerson()}</div>
      </div>
    </div>
  );
};

export default SideSelect;
