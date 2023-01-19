import { NavLink, useNavigate } from "react-router-dom";

function ProfilePage(){
    
    const navigate = useNavigate()

    return(
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <i onClick={() => navigate("/translate")} class="material-icons">arrow_back</i>
            <h3>Your profile</h3>
        </div>
    )
}
export default ProfilePage;