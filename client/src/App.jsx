import { useState } from "react";
import Landing from "./pages/landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Landing></Landing>
      hehe
    </div>
  );
}

export default App;
