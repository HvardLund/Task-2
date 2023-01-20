import { useForm } from "react-hook-form";
const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username"> Username: </label>
                    <input type="text" { ...register("username", usernameConfig) } />
                </fieldset>
                <button type="submit">Continue</button>
            </form>
        </>


    )
}
export default LoginForm;