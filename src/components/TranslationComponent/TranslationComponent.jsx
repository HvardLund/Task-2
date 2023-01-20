import styles from "./TranslationComponent.module.css"
import { useState } from "react"
import images from "../../assets/index"

function TranslationComponent() {
    const [inputContent, setInputContent] = useState('')
    const updateInputContent = (event) => {setInputContent(event.target.value)}
    const handleArrowClick = () => {
    }

    return(
        <div>
            <div className={styles.inputFieldContainer}>
                <input className={styles.inputField} type="text" onChange={updateInputContent}></input>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <i onClick={handleArrowClick} class="material-icons">arrow_forward</i>
            </div>
            {inputContent.split('').map(element => {
                return<img src = {images[element]}></img>})}
        </div>
    )
}
export default TranslationComponent