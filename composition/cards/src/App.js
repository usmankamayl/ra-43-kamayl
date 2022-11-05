import './App.css';
import react from 'react';
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Cards img="https://random.imagecdn.app/500/350">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Cards>
    </div>
  );
}

export default App;
