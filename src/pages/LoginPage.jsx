import LoginForm from '../components/Login/LoginForm';
import styles from './LoginPage.module.css'

function LoginPage(){
    return(
        <div className = {styles.pageContainer}>
            <h3 className={styles.loginHeader}>What's your name?</h3>
            <LoginForm/>
        </div>
    )
}
export default LoginPage;