import style from './ShopCard.module.css';
import PropTypes from 'prop-types';

export const ShopCard = ({product}) => {
  return (
    <div className={style.shopCard}>
      <h2 className={style.title}>{product.name}</h2>
      <p className={style.color}>{product.color}</p>
      <div><img src={product.img} alt="good"/></div>
      <div className={style.cardFooter}>
        <p className="price">${product.price}</p>
        <button className="btn-add">add to cart</button>
      </div>
    </div>
  )
};

ShopCard.protoTypes = {
  product: PropTypes.object.isRequired,
};
