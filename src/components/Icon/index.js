import './style.css'
import PropTypes from 'prop-types'

/**
 * Icon for button and key infos category
 * @param {string} props 
 * @returns Icon
 */
const Icon = (props) => {
    const { icon, iconPosition } = props
    return <div className={`icon ${iconPosition}`}>
        <img src={`${icon}`} alt='' />
    </div>
}

Icon.propTypes = {
    icon: PropTypes.string
}



export default Icon