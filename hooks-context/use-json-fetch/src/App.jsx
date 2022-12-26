import './App.css';

import useFetch from "./UseJsonFetch";

function App() {
  const url = 'http://localhost:7070/loading';
  const { loading, data, error } = useFetch(url, null);
  console.log(data, loading, error)
  return (
    <div className="App">
      {loading && <p>load...</p>}
      <div>
        {error && <span style={{ color: 'red'}}>{JSON.stringify(error)}</span>}
      </div>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
