import React, { useState, useEffect } from "react";

const CurrencyPesoConverter = () => {
  // Estados para manejar el valor a convertir, las monedas y el resultado
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PESOS");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);

  // Simulamos obtener datos de monedas y tasas de cambio desde una API
  useEffect(() => {
    // Aquí deberías usar una API como exchangerate-api o Fixer.io
    const availableCurrencies = ["USD", "PESOS"];
    setCurrencies(availableCurrencies);
  }, []);

  const convertCurrency = async () => {
    let exchangeRate;

    // Condición para verificar si la conversión es de USD a PESOS o de PESOS a USD
    if (fromCurrency === 'PESOS' && toCurrency === 'USD') {
      exchangeRate = 1 / 1200; // Si está convirtiendo de PESOS a USD, la tasa es 1/1200
    } else if (fromCurrency === 'USD' && toCurrency === 'PESOS') {
      exchangeRate = 1200; // Si está convirtiendo de USD a PESOS, la tasa es 1200
    } else {
      exchangeRate = 1; // Si se selecciona la misma moneda, la tasa de cambio es 1
    }

    // Realizamos la conversión
    const conversionResult = amount * exchangeRate;
    setResult(conversionResult.toFixed(2));
  };

  return (

    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}  // Convertir el valor a número
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span> to </span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={convertCurrency} style={{ marginTop: "10px" }}>
        Convert
      </button>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>{amount} {fromCurrency} = {result} {toCurrency}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyPesoConverter;
