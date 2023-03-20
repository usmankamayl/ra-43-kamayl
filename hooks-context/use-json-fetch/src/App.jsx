import './App.css';

import {useFetch} from "./UseJsonFetch";
import {useEffect, useState} from "react";


function App() {

  let [url, setUrl] = useState({url: 'http://localhost:7070/data'});
  const { data, error, loading } =  useFetch(url.url, null);
  console.log(data, error, loading, url.url,' state');
  const handleChangeUrl = (newUrl) => {
   setUrl({...url, url: newUrl})
  };
  useEffect(() => {
    handleChangeUrl(url);
  }, []);

  if(loading) {
    return (<p>Loading...</p>)
  }
  if (error) {
    return(<>
        <p style={{color: "red", textAlign: "center"}}>{JSON.stringify(error)}</p>
      <button onClick={() => handleChangeUrl('http://localhost:7070/data')}>To data</button>
          </>
    )
  }
  // const renderItem = ({id, title})=> (
  //   <div key = {`item-${id}`}>
  //     <p>{id} - {title}</p>
  //   </div>
  // );
  return(
    <div className='wrapper'>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => handleChangeUrl('http://localhost:7070/error')}>To error</button>
      <button onClick={() => handleChangeUrl('http://localhost:7070/loading')}>To loading</button>
    </div>
  )
}
export default App;
