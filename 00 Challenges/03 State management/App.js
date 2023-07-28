import { useState } from "react";
import "./styles.css";

export default function App() {
  const [price, setPrice] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const finalTip = price * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setPrice("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="App">
      <Bill price={price} onSetPrice={setPrice} />
      <Tip tip={tip1} onSetTip={setTip1}>
        How much did you enjoy it ?
      </Tip>
      <Tip tip={tip2} onSetTip={setTip2}>
        How much did your friend enjoy it ?
      </Tip>

      {price > 0 && (
        <>
          <Output price={price} finalTip={finalTip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ price, onSetPrice }) {
  return (
    <div>
      <label>How much was the bill ?</label>
      <input
        text="text"
        placeholder="Bill value"
        value={price}
        onChange={e => onSetPrice(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, onSetTip, children }) {
  return (
    <div>
      <label> {children} </label>
      <select value={tip} onChange={e => onSetTip(Number(e.target.value))}>
        <option value="0"> Not happy (0%) </option>
        <option value="5"> Ok (5%) </option>
        <option value="10"> Happy (10%) </option>
        <option value="20"> Very Happy (20%) </option>
      </select>
    </div>
  );
}

function Output({ price, finalTip }) {
  return (
    <h2>
      {" "}
      Your bill is ${price}. Your combined tips are ${finalTip}. The total price
      is ${price + finalTip}
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}> Reset </button>;
}
