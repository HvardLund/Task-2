import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from "../../api/user";
import { storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import styles from './LoginForm.module.css'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors }} = useForm();
    const { user, setUser } = useUser()
    //Local state
    const [ loading, setLoading ] = useState(false)
    const [apiError, setApiError ] = useState(null)

    //Side effects
    useEffect(() => {
        console.log("User has changed", user)

    }, [ user ]) //Empty Deps - Only run once

    //Event handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [ error, userResponse ] = await loginUser(username)
        if (error!==null){
            setApiError(error)
        }
        if (userResponse !== null){
            storageSave('translation-user', userResponse)
            setUser(userResponse)
        }
        setLoading(false);
    };

    //Render functions
    const errorMessage = (() => {
        if (!errors.username){
            return null
        }

        if (errors.username.type === 'required'){
            return <span> Username is required</span>
        }

        if (errors.username.type === 'minLength'){
            return <span> Username is too short</span>
        }
    })()
    
    return (
        <>
            <form className={styles.componentContainer} onSubmit={ handleSubmit(onSubmit) }>
                <fieldset className={styles.inputFieldContainer}>
                    <label htmlFor="username"> Username: </label>
                    <input 
                    type="text"
                    placeholder="Type your username..."
                    { ...register("username", usernameConfig) }
                    className={styles.inputField}
                    maxLength = {20}
                    />
                    <button type ="submit" disabled={ loading} className={styles.translateButton}>{'>'}</button>
                </fieldset>
                { errorMessage }
            { loading && <p>Logging in...</p>}
            { apiError && <p> { apiError }</p> }
            </form>
        </>


    )
}
export default LoginForm;


