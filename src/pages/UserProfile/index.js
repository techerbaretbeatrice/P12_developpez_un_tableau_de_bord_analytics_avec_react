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
                <div className="c"></div>
            </div>
        </div>

    </div>
}

export default UserProfile