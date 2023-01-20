import styles from "./InputField.module.css"
import { useState } from "react"
import images from "../../assets/index"

function InputField() {
    const [inputContent, setInputContent] = useState('')
    const updateInputContent = (event) => {setInputContent(event.target.value)}
    const handleArrowClick = () => {
    }

    return(
        <div>
            <input type="text" onChange={updateInputContent}></input>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <i onClick={handleArrowClick} class="material-icons">arrow_forward</i>
            {inputContent.split('').map(element => {
                return<img src = {images[element]}></img>})}
        </div>
    )
}
export default InputField