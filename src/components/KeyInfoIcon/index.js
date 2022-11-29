import './style.css'
import Icon from '../Icon'
import PropTypes from 'prop-types'

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