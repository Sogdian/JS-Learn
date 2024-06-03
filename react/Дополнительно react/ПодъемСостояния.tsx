import { useState } from 'react';

export const App = () => {
  const [temperature, setTemperature] = useState({ celsius: "", fahrenheit: "" });

  const handleOnChangeCelsius = (value: string) => {
    setTemperature({
      ...temperature,
      celsius: value,
      fahrenheit: tryConvert(value, toFahrenheit)
    })
  }
  const handleOnChangeFahrenheit = (value: string) => {
    setTemperature({
      ...temperature,
      celsius: tryConvert(value, toCelsius),
      fahrenheit: value
    })
  }

  return (
    <div className="page">
      <h1>Конвертер температуры!</h1>
      <div className="content">
        <TemperatureInput scale={TemperatureScale.CELCIUS} value={temperature.celsius} onChange={handleOnChangeCelsius}/>
        <TemperatureInput scale={TemperatureScale.FAHRENHEIT} value={temperature.fahrenheit} onChange={handleOnChangeFahrenheit}/>
      </div>
    </div>
  );
};

//
type TTemperatureInputProps = {
  scale: TemperatureScale;
  temperature: string;
  onChange: () => void;
};

export const TemperatureInput = ({scale, temperature, onChange} : TTemperatureInputProps) => {
  return (
    <fieldset className="card">
      <label className="label">
        Введите температуру в {scale}:
        <input
          className="input"
          name="name"
          type="text"
          inputMode="numeric"
          value={temperature}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};
