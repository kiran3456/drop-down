import "./App.css";
import React from "react";
import { useState } from "react";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const names = ["John", "Kithyana", "Rozeee", "Joy"];

  const handleSelectionChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div className="App">
      <h2>Select names:</h2>
      <select value={selectedItem} onChange={handleSelectionChange}>
        <option value="">-- Select Item --</option>
        {names.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>Selected Item: {selectedItem}</p>
    </div>
  );
};

export default App;
