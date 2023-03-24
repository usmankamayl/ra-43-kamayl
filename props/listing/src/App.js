import './App.css';
import Listing from "./components";
import data from "./data/etsy.json";
const db = JSON.parse(JSON.stringify(data));

// const list = db.map(item => {
//   return {
//     id: item.listing_id ? item.listing_id : 1111,
//     url: item.url ? item.url : '',
//     img: item.MainImage ? item.MainImage.url_570xN : '',
//     title: item.title ? (item.title.length > 50) ? item.title.slice(0, 50) + '...' :  item.title : 'Title',
//     currency_code: item.currency_code ? item.currency_code : 'GBR',
//     price: item.price ? item.price : 0,
//     quantity: item.quantity ? item.quantity : 0,
//   }
// })

const list = db.filter(item => item.state === 'active');
console.log(list, ' list')



function App() {
  return (
    <div className="item-list">
      <Listing data={list} />
    </div>
  );
}

export default App;
