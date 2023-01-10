import './style.css'
import PropTypes from 'prop-types'

/**
 * Icon for button and key infos category
 * 
 * @component 
 * @param {object} props `{icon, iconPosition}`
 * @example
 * <Icon icon={bike} /> : icon path
 * <Icon iconPosition= /> : className
 * @returns Icon
 */
const Icon = (props) => {
    const { icon, iconPosition } = props
    return <div className={`icon ${iconPosition}`}>
        <img src={`${icon}`} alt='' />
    </div>
}

Icon.propTypes = {
    icon: PropTypes.string,
    iconPosition: PropTypes.string
}



export default Icon