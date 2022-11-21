import './style.css'
import PropTypes from 'prop-types'

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