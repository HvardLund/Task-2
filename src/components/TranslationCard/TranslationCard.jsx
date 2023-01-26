import styles from "./TranslationCard.module.css"

function TranslationCard(props) {

    let translation = props.translation

    return(
        <div className = {styles.card}>
            <div className={styles.translationText}>{translation}</div>
        </div>
    )
}
export default TranslationCard