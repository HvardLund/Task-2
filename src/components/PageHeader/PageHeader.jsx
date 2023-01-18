import styles from "./PageHeader.module.css"
import { useNavigate } from "react-router-dom"

function PageHeader() {
    
    const navigate = useNavigate()

    return(
        <div>
            <div className={styles.background}>
                <div className={styles.headerText}>TRANSLATE APP THING</div>
                <div onClick={() => navigate("profile")} className={styles.userIcon}>
                    <h1 className = {styles.username}>H</h1>
                </div>
            </div>
        </div>
    )
}
export default PageHeader