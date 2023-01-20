import styles from "./LogoutButton.module.css"
import { useNavigate } from "react-router-dom"

function LogoutButton() {
    
    const navigate = useNavigate()

    return(
        <div>
            <button className={styles.logoutButton} onClick={() => navigate("/")}> Log out</button>
        </div>
    )
}
export default LogoutButton