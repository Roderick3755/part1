import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);
  let god = good;
  let neu = neutral;
  let ba = bad;

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);

    setAverage((god + -ba) / all);
    console.log(average);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    neu = neu - 1;
    setAverage((god + -ba) / all);
    console.log(average);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    ba = ba - 2;
    setAverage((god + -ba) / all);
    console.log(average);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>

      <p>neutral {neutral}</p>

      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default App;
