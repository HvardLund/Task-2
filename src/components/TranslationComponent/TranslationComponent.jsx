import styles from "./TranslationComponent.module.css"
import { useState, useEffect } from "react"
import images from "../../assets/index"
import { useDispatch } from "react-redux"
import { updateTranslations } from "../../redux-parts/userSLice"
import { storeTranslationData } from "../../api/user";
import { useSelector } from "react-redux";

function TranslationComponent() {
    const [inputContent, setInputContent] = useState('')
    const [displayedText, setDisplayedText] = useState([])
    const updateInputContent = (event) => {setInputContent(event.target.value)}
    const id = useSelector((state) => state.updateUser.id)
    const translations = useSelector((state) => state.updateUser.translations)
    const alphabet = "abcdefghijklmnopqrstuvwxyz ".split("")
    const dispatch = useDispatch();

    //When clicking the arrow-button translations in the user slice is updated and the right sign images are displayed
    const handleArrowClick = () => {
        dispatch(updateTranslations(inputContent));
        
        setDisplayedText(inputContent.toLowerCase().split(""));
    }

    //Calling on changes in the translations user slice
    useEffect(() => {
        storeTranslationData(id, translations)
    }, [translations])
    
    //Simple logic for handling keys on the sign images 
    let imageKey = 0
    const generateKey = () => {
        imageKey+=1
        return imageKey
    }

    return(
        <div className={styles.container}>
            <div className={styles.inputFieldContainer}>
                <input maxLength={40} placeholder= {"Type in text..."} className={styles.inputField} type="text" onChange={updateInputContent}></input>
                <div onClick={handleArrowClick} className={styles.translateButton}>{'>'}</div>
            </div>
            <div className={styles.translationContainer}>
                {displayedText.map(element => {
                    return alphabet.includes(element) && <img key={generateKey()} className={styles.sign} alt={"Sign"} src = {images[element]}></img>})}
            </div>
        </div>
    )
}
export default TranslationComponent