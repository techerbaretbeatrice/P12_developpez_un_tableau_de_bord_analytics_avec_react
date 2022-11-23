import NavIcon from '../NavIcon'
import './style.css'
import meditation from '../../assets/meditation.svg'
import swimmer from '../../assets/swimmer.svg'
import biker from '../../assets/biker.svg'
import bodybuilding from '../../assets/bodybuilding.svg'

/**
 * Vertical sidebar navigation
 * @returns SideBarVertical
 */
const SideBarVertical = () => {
    return <div className='vertical-sidebar'>
        <nav className='nav-style'>
            <NavIcon icon={meditation} />
            <NavIcon icon={swimmer} />
            <NavIcon icon={biker} />
            <NavIcon icon={bodybuilding} />
        </nav>
        <span className='copyright'>Copyright, SportSee 2020</span>

    </div>
}

export default SideBarVertical