import './style.css'
import PropTypes from 'prop-types'
import KeyInfoIcon from '../KeyInfoIcon'

/**
 * card infos for key indicator: calorie, proteins, carbohydrates,lipids a day
 * @param {*} props : keyInfo, unit, keyIndicator, icon, background 
 * @returns KeyInfoCard
 */

const KeyInfoCard = (props) => {
    const { keyInfo, unit, keyIndicator } = props
    const { icon, background } = props
    return <div className='info-card'>
        <div className='info-icon-container'>
            <KeyInfoIcon icon={icon} background={background} />
        </div>
        <div className='info-key-container'>
            <div className='key-info'>
                {`${keyInfo}${unit}`}
            </div>
            <div className='key-indicator'>
                {keyIndicator}
            </div>
        </div>

    </div>

}

KeyInfoCard.propTypes = {
    keyInfo: PropTypes.number,
    unit: PropTypes.string,
    keyIndicator: PropTypes.string,
    icon: PropTypes.string,
    background: PropTypes.string
}

export default KeyInfoCard
