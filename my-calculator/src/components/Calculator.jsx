// App.js (or your parent component)
import React, { useState } from "react";
import SideSelect from "./SideSelect";
import SideResult from "./SideResult";

function App() {
  // You can manage the state in the parent component
  const [bill, setBill] = useState(0);
  const [selectedPercent, setSelectedPercent] = useState(0);
  const [people, setPeople] = useState(1);

  // Define functions to update state in the parent component
  const handleBillChange = (value) => {
    setBill(value);
  };

  const handleSelectedPercentChange = (value) => {
    setSelectedPercent(value);
  };

  const handlePeopleChange = (value) => {
    setPeople(value);
  };

  return (
    <div>
      <SideSelect
        bill={bill}
        selectedPercent={selectedPercent}
        people={people}
        onBillChange={handleBillChange}
        onSelectedPercentChange={handleSelectedPercentChange}
        onPeopleChange={handlePeopleChange}
      />
      <SideResult
        bill={bill}
        selectedPercent={selectedPercent}
        people={people}
      />
    </div>
  );
}

export default App;
