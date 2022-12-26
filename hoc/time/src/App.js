import './App.css';
import React, {useState} from 'react';
//const moment = require('moment');
import * as moment from 'moment-ru';
moment.locale('ru');

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function withDate(WrappedComponent, props) {
   const newDate = moment(props.date).fromNow();
  console.log(newDate, ' newDate')
   return <WrappedComponent  date={newDate}/>
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      {withDate(DateTime, props)}
    </div>
  )
}



function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-10-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-08 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-01-11 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-10 20:00:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}


