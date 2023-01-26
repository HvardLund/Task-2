import TranslationComponent from "../components/TranslationComponent/TranslationComponent";
import styles from "./TranslationPage.module.css"

function TranslationPage(){
    
    const apiURL = 'https://leaf-balanced-headlight.glitch.me'
    let username = 'dewaldels'

    fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {username = (results[0].username)
        })
    .catch(error => {
        console.log(error)
    })
    
    return(
        <div className={styles.pageContainer}>
            <h3 className={styles.header}>Translation</h3>
            <TranslationComponent></TranslationComponent>
        </div>
    )
}
export default TranslationPage;