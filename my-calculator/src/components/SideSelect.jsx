import { useState } from "react";

const SideSelect = () => {
  const [custom, setCustom] = useState(true);
  const [bill, setBill] = useState(0);
  const [selectedPercent, setSelectedPercent] = useState(0);
  const [people, setPeople] = useState(1);
  const [price, setPrice] = useState(0);

  function CustomInput() {
    setCustom(false);
  }

  function SetPeople(event) {
    const newPeople = parseInt(event.target.value, 10);
    setPeople(newPeople);
  }

  function SetBill(event) {
    const newBill = parseFloat(event.target.value);
    setBill(newBill);
    setPrice((selectedPercent * newBill) / 100);
  }

  function selectPercent(percent) {
    setCustom(true);
    setSelectedPercent(percent);
    setPrice((percent * bill) / 100);
  }

  function handleCustomInput(event) {
    const customPercent = parseFloat(event.target.value);
    if (!isNaN(customPercent)) {
      setSelectedPercent(customPercent);
      setPrice((customPercent * bill) / 100);
    }
  }

  function calculateTipPerPerson() {
    if (people === 0) {
      return 0;
    }
    return price / people;
  }

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
      <div className="my-5">
        <div>Price:</div>
        <div>{bill}</div>
        <div>Selected Tip %:</div>
        <div>{selectedPercent}%</div>
        <div>Tip per Person:</div>
        <div>{calculateTipPerPerson()}</div>
        <div>{bill / people + calculateTipPerPerson()}</div>
      </div>
    </div>
  );
};

export default SideSelect;
