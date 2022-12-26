import {useEffect, useState} from "react";
import Details from "./Details";
const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

const List = () => {
 const [users, setUsers] = useState([]);
 // const [showInfo, setShowInfo] = useState(false);
 const [info, setInfo] = useState({id: null, name: ''})

  const loadUsers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const users = await response.json();
      setUsers(users);
      console.log(users)
    } catch (e) {
      console.error(e);
    }
  }
  const handleShowInfo = (item) => {
    // setShowInfo(prevState => !showInfo);
    setInfo(prevState => ({id: item.id, name: item.name}));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(   () => {
    loadUsers();
  }, [])

  return(
    <div className="wrapper">
      <ul className="list">
        {users.map(item => {
          return <li key={item.id} className="list-item" onClick={() => handleShowInfo(item)}>{item.name}
          </li>
        })}
      </ul>
      {info.id && <Details info={info} />}
    </div>
  )
}

export default List;
