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




const UserProfile = () => {
    const { loading, data } = useContext(DataContext)
    return loading ? "en cours de chargement" : <div className='dashboard-style'>
        <SideBarHorizontal />
        <div className="board">
            <SideBarVertical />
            <div className="a">
                <div className="b">
                    <div className='welcome-user'>
                        <div className='welcome'>Bonjour </div>
                        <div className='user-firstname'>{data?.userInfo?.userInfos.firstName} </div>
                    </div>
                    <div className='congratulation-message'>Félicitations! Vous avez explosé vos objectifs hier 👏</div>
                </div>
                <div className="c">
                    <div className="d">
                        <div className="daily-activity"></div>
                        <div className="f"></div>

                    </div>
                    <div className="info-cards-container">
                        <KeyInfoCard icon={energy} background='energy-background' keyInfo={data?.userKeyIndicator?.keyData.calorieCount} unit='Kcal' keyIndicator='Calories' />
                        <KeyInfoCard icon={chicken} background='chicken-background' keyInfo={data?.userKeyIndicator?.keyData.proteinCount} unit='g' keyIndicator='Protéïnes' />
                        <KeyInfoCard icon={apple} background='apple-background' keyInfo={data?.userKeyIndicator?.keyData.carbohydrateCount} unit='g' keyIndicator='Glucides' />
                        <KeyInfoCard icon={cheeseburger} background='cheeseburger-background' keyInfo={data?.userKeyIndicator?.keyData.lipidCount} unit='g' keyIndicator='Lipides' />
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default UserProfile