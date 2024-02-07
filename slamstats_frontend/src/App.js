import "./App.css";
import Header from "./Header.js";
import Bracket from "./Bracket.js"
import News from "./News.js"
import Top25 from "./Top25.js"
import UpcomingGames from "./UpcomingGames.js"

function App() {
  return (
    <div className="App">
      <div className="header">
      <Header />
      </div>

      <div className="main-content">
        <div className="left-content">
          <Bracket />
        </div>
        <div className="center-content">
          <News />
        </div>
        <div className="right-content">
          <div className="topright-content">
            <Top25 />
          </div>
          <div className="bottomright-content">
            <UpcomingGames />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
