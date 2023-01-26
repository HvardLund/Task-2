import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from "../../api/user";
import styles from './LoginForm.module.css'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../redux-parts/userSLice"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [ user, setUser ] = useState(useSelector((state) => state.updateUser))
    const [ loading, setLoading ] = useState(false)
    const [apiError, setApiError ] = useState(null)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (user.id !== 0){
            navigate('/translate')
            dispatch(updateUser(user))
        }
    }, [ user, navigate, dispatch])

    //Event handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [ error, userResponse ] = await loginUser(username)
        if (error!==null){
            setApiError(error)
        }
        if (userResponse !== null){
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
                    <button type ="submit" disabled={ loading } className={styles.translateButton}>{'>'}</button>
                </fieldset>
                { errorMessage }
            { loading && <p>Logging in, this might take take a few seconds...</p>}
            { apiError && <p> { apiError }</p> }
            </form>
        </>


    )
}
export default LoginForm;


