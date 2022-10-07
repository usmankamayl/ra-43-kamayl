import Star from "../Star";
import PropTypes from 'prop-types'

export const Stars = ({count}) => {

  function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }

  if (count < 0 || count > 5 || !isNumber(count)) {
    return console.log('incorrect value')
  }

  const list = []
  let i = 0;

  while (list.length < count) {
    list.push(i);
    i++;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {list.map((item, i) => <Star key={i} />)}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}
