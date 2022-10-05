import style from './ShopItem.module.css';
import PropTypes from 'prop-types';

export const ShopItem = ({item}) => {
  return (
    <div className={style.shopItem}>
      <div className={style.imgBlock}><img className={style.shopImg} src={item.img} alt="good"/></div>
      <h2 className={style.title}>{item.name}</h2>
      <p className={style.color}>{item.color}</p>
      <p className="price">${item.price}</p>
      <button className="btn-add">Add to cart</button>
    </div>
  )
}

ShopItem.proTypes = {
  item: PropTypes.object.isRequired,
}
