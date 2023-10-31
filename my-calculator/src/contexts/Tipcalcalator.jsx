import React, { createContext, useContext, useState } from "react";

const TipCalculatorContext = createContext();

export function TipCalculatorProvider({ children }) {
  const [custom, setCustom] = useState(true);
  const [bill, setBill] = useState(0);
  const [selectedPercent, setSelectedPercent] = useState(0);
  const [people, setPeople] = useState(1);
  const [price, setPrice] = useState(0);

  function resetState() {
    setCustom(true);
    setBill(0);
    setSelectedPercent(0);
    setPeople(1);
    setPrice(0);
  }

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

  const contextValue = {
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
    resetState,
  };

  return (
    <TipCalculatorContext.Provider value={contextValue}>
      {children}
    </TipCalculatorContext.Provider>
  );
}

export function useTipCalculatorContext() {
  return useContext(TipCalculatorContext);
}
