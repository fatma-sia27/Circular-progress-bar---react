import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

function App() {
  // const percentage = 45;

  const [time, setTime] = useState(10);
  setTimeout(() => {
    time === 0 ? setTime(0) : setTime(time - 1);
  }, 1000);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar value={time} maxValue={10} text={`${time}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
