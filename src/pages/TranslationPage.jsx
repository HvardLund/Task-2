import TranslationComponent from "../components/TranslationComponent/TranslationComponent";
import styles from "./TranslationPage.module.css"

function TranslationPage(){
    return(
        <div className={styles.pageContainer}>
            <h3 className={styles.header}>Translation</h3>
            <TranslationComponent></TranslationComponent>
        </div>
    )
}
export default TranslationPage;