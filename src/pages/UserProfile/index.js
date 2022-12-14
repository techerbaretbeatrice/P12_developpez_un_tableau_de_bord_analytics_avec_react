import './style.css'
import SideBarHorizontal from "../../components/SideBarHorizontal"
import SideBarVertical from "../../components/SideBarVertical"
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import KeyInfoCard from '../../components/KeyInfoCard'
import apple from '../../assets/apple.svg'
import chicken from '../../assets/chicken.svg'
import energy from '../../assets/energy.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import DailyActivity from '../../components/DailyActivity'
import SessionDuration from '../../components/SessionDuration'
import Performance from '../../components/Performance'
import Completion from '../../components/Completion'


/**
 * page displaying the user dashboard:: horizontal and vertical navigation components, user datas charts component
 * @returns UserProfil 
 */


const UserProfile = () => {
    const { loading, data, error } = useContext(DataContext)
    if (error) return "Erreur de chargement des données"
    return loading ? "en cours de chargement" : <div className='dashboard-style'>
        <SideBarHorizontal />
        <div className="board">
            <SideBarVertical />
            <div className="dashboard-container">
                <div className="user-info-container">
                    <div className='welcome-user'>
                        <div className='welcome'>Bonjour </div>
                        <div className='user-firstname'>{data?.userInfo?.firstName} </div>
                    </div>
                    <div className='congratulation-message'>Félicitations! Vous avez explosé vos objectifs hier 👏</div>
                </div>
                <div className="graph-kpi-container">
                    <div className="graph-container">
                        <span className='title-daily-activity'>Activité quotidienne</span>
                        <div className="daily-activity">
                            <DailyActivity />
                        </div>
                        <div className="graph-small-container">
                            <span className='title-daily-session'>Durée moyenne des sessions</span>
                            <div className='session'>
                                <SessionDuration />
                            </div>
                            <div className='performance'>
                                <Performance />
                            </div>
                            <div className='completion'>
                                <span className='title-completion'>Score</span>
                                <Completion />
                            </div>
                        </div>

                    </div>
                    <div className="info-cards-container">
                        <KeyInfoCard icon={energy} background='energy-background' keyInfo={data?.userKeyIndicator?.calorieCount} unit='Kcal' keyIndicator='Calories' />
                        <KeyInfoCard icon={chicken} background='chicken-background' keyInfo={data?.userKeyIndicator?.proteinCount} unit='g' keyIndicator='Protéïnes' />
                        <KeyInfoCard icon={apple} background='apple-background' keyInfo={data?.userKeyIndicator?.carbohydrateCount} unit='g' keyIndicator='Glucides' />
                        <KeyInfoCard icon={cheeseburger} background='cheeseburger-background' keyInfo={data?.userKeyIndicator?.lipidCount} unit='g' keyIndicator='Lipides' />
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default UserProfile