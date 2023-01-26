import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton/LogoutButton";
import ProfileImage from "../components/ProfileImage/ProfileImage";
import TranslationCard from "../components/TranslationCard/TranslationCard";
import styles from "./ProfilePage.module.css"
import { useSelector } from "react-redux";

function ProfilePage(){
    
    const navigate = useNavigate()
    const translations = useSelector((state) => state.updateUser.translations)
    const username = useSelector((state) => state.updateUser.username)
    
    let cardKey = 0
    const generateKey = () => {
        cardKey+=1
        return cardKey
    }

    return(
        <div className={styles.pageContainer}>
            <div className={styles.backContainer}>
                <div onClick={() => navigate("/translate")} className={styles.back}>{"<"}</div>
            </div>            
            <div className={styles.contentContainer}>
                <div className={styles.profileInfo}>
                    <ProfileImage></ProfileImage>
                    <h3 className={styles.header}>{username.charAt(0).toUpperCase() + username.slice(1)}</h3>
                    <LogoutButton></LogoutButton>
                </div>
                <div className={styles.cardContainer}>
                    <h3 className={styles.translationsHeader}>Your translations</h3>
                    {translations.slice(Math.max(translations.length - 10, 0)).map(element => {
                    return translations.length > 0 && <TranslationCard key = {generateKey()} translation = {element}/>})}

                </div>
                </div>
        </div>
    )
}
export default ProfilePage;