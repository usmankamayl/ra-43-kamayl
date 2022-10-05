import style from './ListView.module.css';
import ShopItem from "../ShopItem";
import PropTypes from 'prop-types';

export const ListView = ({items}) => {
  return (
    <div className={style.listView}>
      {items.map((item, i) => (
        <ShopItem item={item} key={i}/>
      ))}
    </div>
  )
}

ListView.protoTypes = {
  items: PropTypes.array.isRequired,
}
