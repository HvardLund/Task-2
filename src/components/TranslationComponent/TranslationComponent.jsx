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
    const [ loading, setLoading ] = useState(false)
    const [apiError, setApiError ] = useState(null)
    const [translationList, setTranslationList] = useState(translations)

    const handleArrowClick = () => {
        dispatch(updateTranslations(inputContent));
        
        setDisplayedText(inputContent.toLowerCase().split(""));
    }

    useEffect(() => {
        storeTranslationData(id, translations)
    }, [translations])
    

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
            { loading && <p>Saving, this might take take a few seconds...</p>}
            { apiError && <p> { apiError }</p> }
            <div className={styles.translationContainer}>
                {displayedText.map(element => {
                    return alphabet.includes(element) && <img key={generateKey()} className={styles.sign} alt={"Sign"} src = {images[element]}></img>})}
            </div>
        </div>
    )
}
export default TranslationComponent