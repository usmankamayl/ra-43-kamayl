import PropTypes, {object} from 'prop-types';

export const Listing = ({data = []}) => {
  return (
    data.map(item => (
      <div className="item" key={item.id}>
        <div className="item-image">
          <a href={item.url}>
                <img src={item.img} alt="картинка"/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : 'GBP'} {item.price}</p>
          <p className={item.quantity <= 10  ? "level-low item-quantity" : item.quantity <= 20 ? "level-medium item-quantity" : "level-high item-quantity"} >{item.quantity} left</p>
        </div>
      </div>
    ))
  )
}


Listing.propTypes = {
  data: PropTypes.arrayOf(object),
}







