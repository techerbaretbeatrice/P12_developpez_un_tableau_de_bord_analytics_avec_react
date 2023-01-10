import './style.css'
import Icon from '../Icon'
import PropTypes from 'prop-types'

/**
 * icon in  card infos for key indicator: calorie, proteins, carbohydrates,lipids a day
 * @component
 * @param {*} props :  icon, background 
 * @example
 * <KeyInfoIcon  background = 'chicken-background' /> : className
 * <KeyInfoIcon  icon = 'chicken' /> : icon path
 * @returns KeyInfoIcon
 */
const KeyInfoIcon = (props) => {
    const { icon, background } = props

    return <div className={`icon-box ${background}`}>
        <Icon icon={icon} />
    </div>
}
KeyInfoIcon.propTypes = {
    icon: PropTypes.string,
    background: PropTypes.string
}





export default KeyInfoIcon