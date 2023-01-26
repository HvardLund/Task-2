import styles from "./PageHeader.module.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

function PageHeader() {
    
    const navigate = useNavigate()
    const username = useSelector((state) => state.updateUser.username)
    const id = useSelector((state) => state.updateUser.id) !== 0

    return(
        <div>
            <div className={styles.background}>
                <div onClick={() => navigate("translate")} className={styles.headerText}>TRANSLATE APP THING</div>
                {id &&
                    <div onClick={() => navigate("profile")} className={styles.userIcon}>
                        <h1 className = {styles.username}>{username.charAt(0).toUpperCase()}</h1>
                    </div>
                }
            </div>
        </div>
    )
}
export default PageHeader