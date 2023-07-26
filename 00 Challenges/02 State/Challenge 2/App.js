import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() * count);

  function handleNext() {
    setStep(step => step + 1);
  }
  function handlePrevious() {
    setStep(step => step - 1);
  }
  function handleNextCount() {
    setCount(count => count + step);
  }
  function handlePreviousCount() {
    setCount(count => count - step);
  }

  // function muliplicator () {

  // }

  return (
    <div>
      <div className="container">
        <button onClick={handlePrevious}>-</button>
        <h2> Step: {step} </h2>
        <button onClick={handleNext}>+</button>
      </div>
      <div className="container">
        <button onClick={handlePreviousCount}>-</button>
        <h2> Count: {count} </h2>
        <button onClick={handleNextCount}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is"
          : count < 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>
    </div>
  );
}
