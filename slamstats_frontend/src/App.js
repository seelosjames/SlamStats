import "./App.css";
import Home from "./Home.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
