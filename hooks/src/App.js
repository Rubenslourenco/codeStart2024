import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default App;
