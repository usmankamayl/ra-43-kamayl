import style from './CardsView.module.css';
import ShopCard from "../ShopCard";
import PropTypes from 'prop-types';

export const CardsView = ({products}) => {
  return(
    <div className={style.cardsView}>
      {products.map((product, i) => (
        <ShopCard product={product} key={i}/>
      ))}
    </div>
  )
}

CardsView.protoTypes = {
  productS: PropTypes.array.isRequired,
}
