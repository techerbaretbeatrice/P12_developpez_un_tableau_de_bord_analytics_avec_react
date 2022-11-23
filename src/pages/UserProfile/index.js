import './style.css'
import SideBarHorizontal from "../../components/SideBarHorizontal"
import SideBarVertical from "../../components/SideBarVertical"
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'




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
                    <div className="e">

                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default UserProfile