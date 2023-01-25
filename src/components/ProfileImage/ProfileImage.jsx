import styles from "./ProfileImage.module.css"
import { useSelector } from "react-redux"

function ProfileImage() {
    
    const username = useSelector((state) => state.updateUser.username)

    return(
        <div className={styles.profileCircle}>
            <h1 className={styles.bigLetter}>{username.charAt(0).toUpperCase()}</h1>
        </div>
    )
}
export default ProfileImage