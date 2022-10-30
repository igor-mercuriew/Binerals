import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '../../contexts/toastContext';
import './login.scss';

export default function Login() {

    const { setContextToast } = useContext(ToastContext);
    const history = useNavigate();

    function handlerSubmit(event) {
        event.preventDefault();

        if (event.target.email.value.toLowerCase() !== 'binerals@gmail.com' || event.target.password.value !== 'Binerals_123')
        setContextToast('error', 'Error! <br />Incorrect email or password')
        else {
            if (event.target.remember.checked)
                document.cookie = 'Exit=false';
            else
                document.cookie = 'Exit=true';
                
            document.cookie = 'SignIn=true';
            history("/Binerals/chat");
        }
    }

    const toast = useRef();

    return (
        <>
            <form className='login' onSubmit={handlerSubmit}>
                <input type="email" name='email' placeholder='binerals@gmail.com' />
                <input type="password" name='password' minLength={5} placeholder='Binerals_123' />
                <input type="checkbox" name="remember" id='remember' />
                <label htmlFor='remember'>Don`t exit</label>
                <button>
                    Sign in
                </button>
            </form>
        </>
    )
}