import './style.css'
import Icon from '../Icon'
import PropTypes from 'prop-types'


/**
 * button for navigation in  vertical sidebar navigation
 * @params {*} props: icon
 * @returns NavButton
 */
const NavButton = (props) => {
    const { icon } = props
    return <button className='icon-container'>
        <Icon icon={icon} />
    </button>
}
Icon.propTypes = {
    icon: PropTypes.string
}

export default NavButton