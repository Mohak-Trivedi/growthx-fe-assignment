import { useState } from "react";
import ElevateLogo from "./components/ElevateLogo";
import "./App.css";

function App() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="app">
      <ElevateLogo key={animationKey} />
      <button className="replay-button" onClick={handleReplay}>
        Replay Animation
      </button>
    </div>
  );
}

export default App;
