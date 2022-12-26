import {useEffect, useRef, useState} from "react";

const Details = ({info}) => {
  const [user, setUser] = useState({isLoading: false});
  const url =  `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`

  const loadUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const userInfo = await response.json();
      setUser({...userInfo, isLoading: false});
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  }

  const imgEl = useRef(null);


  useEffect( () => {
    setUser({...user, isLoading: true});
    console.log(user, 1)
    // eslint-disable-next-line no-unused-expressions
    imgEl.current.src ? imgEl.current.src = "" || imgEl.current.src : imgEl.current.src;
    loadUser();
  }, [info.id])

  return(
    <div className='details-wrapper'>
      {user.isLoading && <p className="load">Load...</p>}
      {!user.isLoading && (
        <div className="details">
          <img src={user?.avatar} alt="" ref={imgEl}/>
          <p className="name">{user.name}</p>
          <p className="city">city: {user?.details?.city}</p>
          <p className="city">company: {user?.details?.company}</p>
          <p className="city">position: {user?.details?.position}</p>
        </div>
      )}
    </div>

  )
}

export default Details;
