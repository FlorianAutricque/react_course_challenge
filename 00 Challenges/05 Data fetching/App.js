// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [amount, setAmout] = useState("100");

  const [conversion, setConversion] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        const res =
          await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}
        `);
        const data = await res.json();
        console.log(data);

        setConversion(data.rates[secondCurrency]);

        setIsLoading(false);
      }

      if (firstCurrency === secondCurrency) return setConversion(amount);
      fetchData();
    },
    [firstCurrency, secondCurrency, amount]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmout(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={firstCurrency}
        onChange={e => setFirstCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={e => setSecondCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        {conversion} {secondCurrency}
      </p>
    </div>
  );
}
