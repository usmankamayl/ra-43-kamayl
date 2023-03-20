
// import {useState, useEffect} from "react";
//
//
//
// const useFetch = (url, options) => {
//
//   const [state, setState] = useState({
//     loading: false,
//     data: undefined,
//     error: undefined
//   });
//
//   function fetchNow(url, options) {
//     fetch(url, options)
//       .then((res) => {
//         console.log(res.status);
//         console.log(res, ' json')
//         if (res.status === 500) {
//           console.log(res.statusText)
//           return setState({...state, error: res.statusText});
//         }
//       })
//       .catch((error) => {
//         console.log('error')
//         setState({...state,  loading: true, error: error, data: undefined });
//       });
//   }
//
//   useEffect(() => {
//     if (url) {
//       fetchNow(url, options);
//     }
//   }, []);
//   console.log(state, ' state')
//   return state;
// }
//
// export default useFetch;
import { useState, useEffect } from 'react';
export const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState( null);
  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        if (response.status === 200) {
          setLoading(false);
          setError(null);
          setData(json);
        }

        if (response.status === 500) {
          setError(json);
          setData(null);
          setLoading(false);
        }
      } catch (err) {
        console.log(err, ' err')
      }
    }
    fetchData();
  }, [url, options]);
  return ({loading, data, error});
};
