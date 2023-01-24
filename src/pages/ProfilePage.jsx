import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton/LogoutButton";
import TranslationCard from "../components/TranslationCard/TranslationCard";
import styles from "./ProfilePage.module.css"

function ProfilePage(){
    
    const navigate = useNavigate()

    return(
        <div className={styles.pageContainer}>
            <div className={styles.backContainer}><div onClick={() => navigate("/translate")} className={styles.back}>{"<"}</div></div>
            <h3 className={styles.header}>Your profile</h3>
            <div className={styles.contentContainer}>
                <div className={styles.profileInfo}>
                    <LogoutButton></LogoutButton>
                </div>
                <div className={styles.cardContainer}>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                    <TranslationCard/>
                </div>
                </div>
        </div>
    )
}
export default ProfilePage;