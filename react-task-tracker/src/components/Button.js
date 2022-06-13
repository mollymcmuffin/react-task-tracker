
import PropTypes from 'prop-types';

const Button = ({text, color, whenClick}) => {


  return (
  <button onClick = {whenClick} className = 'btn' style = {{backgroundColor: color}}>{text}</button>)
  
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button