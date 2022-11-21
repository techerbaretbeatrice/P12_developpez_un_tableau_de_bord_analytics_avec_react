import './style.css'
import SideBarHorizontal from "../../components/SideBarHorizontal"
import SideBarVertical from "../../components/SideBarVertical"



const UserProfile = () => {
    return <div className='dashboard-style'>
        <SideBarHorizontal />
        <div className="board">
            <SideBarVertical />
            <div className="a">
                <div className="b"></div>
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