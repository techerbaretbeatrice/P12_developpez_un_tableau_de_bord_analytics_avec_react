import SideBarHorizontal from "../../components/SideBarHorizontal"
import SideBarVertical from "../../components/SideBarVertical"



const UserProfile = () => {
    return <div className='dashboard-style'>
        <div><SideBarHorizontal /></div>
        <div className='board'>
            <div><SideBarVertical /></div>

        </div>
    </div >
}

export default UserProfile