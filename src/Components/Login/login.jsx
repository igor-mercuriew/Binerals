import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

export default function Login() {

    const history = useNavigate();

    function handlerSubmit(event) {
        event.preventDefault();

        if (event.target.email.value !== 'binerals@gmail.com' || event.target.password.value !== 'Binerals_123')
            showError();
        else {
            if (event.target.remember.checked)
                document.cookie = 'Exit=false';
            else
                document.cookie = 'Exit=true';
                
            document.cookie = 'SignIn=true';
            history("/");
        }
    }

    function showError() {
        toast.current.style.opacity = 1;

        setTimeout(() => {
            toast.current.style.opacity = 0;
        }, 3000);
    }

    const toast = useRef();

    return (
        <>
            <form className='login' onSubmit={handlerSubmit}>
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' minLength={5} placeholder='Password' />
                <input type="checkbox" name="remember" id='remember' />
                <label htmlFor='remember'>Don`t exit</label>
                <button>
                    Sign in
                </button>
            </form>

            <div className="toast" ref={toast}>
                Error! <br />
                Incorrect email or password
            </div>
        </>
    )
}