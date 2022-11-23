import './style.css'
import PropTypes from 'prop-types'

/**
 * button for navigation in  vertical sidebar navigation
 * @returns NavIcon
 */
const NavIcon = (props) => {
    const { icon } = props

    return <button className='icon-container'>
        <img src={`${icon}`} alt=''></img>
    </button>
}

NavIcon.propTypes = {
    icon: PropTypes.string
}
export default NavIcon