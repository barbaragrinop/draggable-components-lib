import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Draggable from "react-draggable";

function App() {
  const [selectedInput, setSelectedInput] = useState(null);

  const handleSelectInput = (input: any) => {
    setSelectedInput(input);
  };

  const handleDragStop = (e: any, data: any) => {
    // Aqui faz algo com as coordenadas finais do input arrastado
    console.log("Posição final:", data.x, data.y);
  };

  return (
    <div>
      <button onClick={() => handleSelectInput("input1")}>
        Selecionar Input 1
      </button>
      <button onClick={() => handleSelectInput("input2")}>
        Selecionar Input 2
      </button>
      {selectedInput && (
        <Draggable onStop={handleDragStop}>
          <input type="text" />
        </Draggable>
      )}
    </div>
  );
}

export default App;
