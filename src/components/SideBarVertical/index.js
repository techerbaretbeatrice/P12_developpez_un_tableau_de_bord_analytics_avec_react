import NavButton from '../NavButton'
import './style.css'
import meditation from '../../assets/meditation.svg'
import swimmer from '../../assets/swimmer.svg'
import biker from '../../assets/biker.svg'
import bodybuilding from '../../assets/bodybuilding.svg'

/**
 * Vertical sidebar navigation
 * @component
 * @returns SideBarVertical
 */
const SideBarVertical = () => {
    return <div className='vertical-sidebar'>
        <nav className='nav-style'>
            <NavButton icon={meditation} > </NavButton >
            <NavButton icon={swimmer} > </NavButton >
            <NavButton icon={biker} ></NavButton >
            <NavButton icon={bodybuilding} ></NavButton >
        </nav>
        <span className='copyright'>Copyright, SportSee 2020</span>

    </div>
}

export default SideBarVertical