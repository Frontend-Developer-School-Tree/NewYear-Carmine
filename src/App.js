import "./App.css";
import NewYear from "./components/NewYear";
import Timer from "./components/Timer";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <div className="imgBox"></div>
      <div className="countdownBox">
        <Title year="Countdown to New Year" />
        <NewYear />
      </div>
    </div>
  );
}

export default App;
