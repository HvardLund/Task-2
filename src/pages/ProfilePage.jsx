import { NavLink } from "react-router-dom";

function ProfilePage(){
    return(
        <div>
            <NavLink to="/translate">{"<Back"}</NavLink>
            <h3>Your profile</h3>
        </div>
    )
}
export default ProfilePage;