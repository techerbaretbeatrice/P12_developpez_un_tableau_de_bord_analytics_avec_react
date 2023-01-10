import './style.css'
import sportsee from '../../assets/sportsee.svg'

/**
 *  horizontal sidebar navigation
 * @component
 * @returns SideBarHorizontal
 */
const SideBarHorizontal = () => {
    return <div>
        <div className='horizontal-sidebar'>
            <div className='logo-container'>
                <img src={sportsee} alt='' />

            </div>
            <nav className='horizontal-navigation'>
                <ul className='nav-links'>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>

            </nav>

        </div>
    </div>
}

export default SideBarHorizontal