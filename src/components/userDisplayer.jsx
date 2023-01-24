import { useDispatch, useSelector } from "react-redux"
import { updateUser, updateTranslations } from "../redux-parts/userSLice"

export function UserDisplayer(){
    const username = useSelector((state) => state.updateUser.username)
    const translations = useSelector((state) => state.updateTranslations.translations)
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=> dispatch(updateUser({id: "1", username: "per", translations:[]}))}>Test</button>
            <button onClick={() => dispatch(updateTranslations("hola"))}>Test2</button>
            <span>{username}</span>
            <span>{translations}</span>
            
        </div>
    )
}