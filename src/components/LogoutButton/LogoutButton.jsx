import styles from "./LogoutButton.module.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUser } from "../../redux-parts/userSLice"

function LogoutButton() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = {id:0, username: "", translations:[]}
    const onClick = () => {
        navigate("/");
        dispatch(updateUser(user))
    }

    return(
        <div>
            <button className={styles.logoutButton} onClick={onClick}> Log out</button>
        </div>
    )
}
export default LogoutButton