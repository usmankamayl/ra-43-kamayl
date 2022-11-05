import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

export const Watch = ({clockInfo, children}) => {
  const [date, setDate] = useState(new Date());
  const clock =  setTimeout(() => {
    setDate(new Date());
  }, 1000)

    let hours = Number(date.getUTCHours()) + Number(clockInfo.hour);
  // eslint-disable-next-line no-unused-expressions
     hours > 24 ? hours = hours - 24 : hours;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;


    // useEffect(() => {
    //   console.log('вмонтирован')
    // }, [date]);
    useEffect(() => {
      console.log('unmount')
    return clearTimeout(clock);

  }, []);


  return(
    <>
      <div className="date">
        <p className="cityName">{clockInfo.city}</p>
        <div className='clock'>
          {hours  + ":" + minutes + ":" + seconds}
          {children}
        </div>
      </div>
    </>

  )
}

Watch.propTypes = {
  clockInfo: PropTypes.object,
}
