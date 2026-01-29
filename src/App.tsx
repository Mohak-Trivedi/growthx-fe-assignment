import { useRef } from "react";
import ElevateLogo from "./components/ElevateLogo";
import "./App.css";

function App() {
  const logoRef = useRef<HTMLDivElement>(null);

  const handleReplay = () => {
    if (logoRef.current) {
      logoRef.current.classList.remove("animating");
      // Force browser reflow to ensure the class removal is registered
      void logoRef.current.offsetHeight;
      logoRef.current.classList.add("animating");
    }
  };

  return (
    <div className="app">
      <ElevateLogo ref={logoRef} />
      <button className="replay-button" onClick={handleReplay}>
        Replay Animation
      </button>
    </div>
  );
}

export default App;
