import './cabinet.scss';
import { useEffect, useState } from 'react';
import Home from './Tabs/Home/home';
import { useParams, useNavigate } from 'react-router';
import Ava from './assets/image 1.png';
import { Link } from 'react-router-dom';
import Chat from './Tabs/Chat/chat';
import Settings from './Tabs/Settings/settings';
import checkIsLogin from '../../services/checkIsLogin';


export default function Cabinet() {

    const [isShowNav, setisShowNav] = useState(false);
    const history = useNavigate();

    let { id } = useParams();
    if (!id) id = '';

    useEffect(() => {
        checkIsLogin(history);
    }, [])

    return (
        <div className="cabinet">
            <header className='row'>
                <Link to='/Binerals/home'>
                    <h4>
                        Logo
                    </h4>
                </Link>
                <ul>
                    <li className='row'><img src={Ava} alt="avatar" /> <h6>Jerry Little</h6>
                        <ul>
                            <li>
                                Profile
                            </li>
                            <li>
                                Photos
                            </li>
                            <Link to='/Binerals/settings'>
                                <li>
                                    Settings
                                </li>
                            </Link>
                            <li>
                                Edit
                            </li>
                        </ul>
                    </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className='menu' onClick={() => { setisShowNav(!isShowNav); document.querySelector('.menu').style.transform = `${isShowNav ? 'rotate(0deg)' : 'rotate(180deg)'}` }}>
                    {
                        isShowNav ?
                            <path xmlns="http://www.w3.org/2000/svg" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                            : <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
                    }
                </svg>
            </header>

            <main className='row'>
                <nav className={`column ${isShowNav ? 'show' : ''}`}>
                    <div>
                        <div className="row profile">
                            <img src={Ava} alt="avatar" />
                            <h6>
                                Jerry Little
                            </h6>
                        </div>
                        <Link to='/Binerals/home' className="row" onClick={() => { setisShowNav(!isShowNav); document.querySelector('.menu').style.transform = `${isShowNav ? 'rotate(0deg)' : 'rotate(180deg)'}` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
                                <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" />
                            </svg>
                            Home
                        </Link>
                        <Link to='/Binerals/chat' className="row" onClick={() => { setisShowNav(!isShowNav); document.querySelector('.menu').style.transform = `${isShowNav ? 'rotate(0deg)' : 'rotate(180deg)'}` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 7H16V9H4V7ZM12 12H4V10H12V12ZM16 6H4V4H16V6Z" />
                            </svg>
                            Chat
                        </Link>
                        <Link to='/Binerals/settings' className="row" onClick={() => { setisShowNav(!isShowNav); document.querySelector('.menu').style.transform = `${isShowNav ? 'rotate(0deg)' : 'rotate(180deg)'}` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M17.14 10.94C17.18 10.64 17.2 10.33 17.2 10C17.2 9.68003 17.18 9.36002 17.13 9.06002L19.16 7.48002C19.34 7.34002 19.39 7.07002 19.28 6.87002L17.36 3.55002C17.24 3.33002 16.99 3.26002 16.77 3.33002L14.38 4.29002C13.88 3.91002 13.35 3.59002 12.76 3.35002L12.4 0.810024C12.36 0.570024 12.16 0.400024 11.92 0.400024H8.07999C7.83999 0.400024 7.64999 0.570024 7.60999 0.810024L7.24999 3.35002C6.65999 3.59002 6.11999 3.92002 5.62999 4.29002L3.23999 3.33002C3.01999 3.25002 2.76999 3.33002 2.64999 3.55002L0.739988 6.87002C0.619988 7.08002 0.659988 7.34002 0.859988 7.48002L2.88999 9.06002C2.83999 9.36002 2.79999 9.69002 2.79999 10C2.79999 10.31 2.81999 10.64 2.86999 10.94L0.839988 12.52C0.659988 12.66 0.609988 12.93 0.719988 13.13L2.63999 16.45C2.75999 16.67 3.00999 16.74 3.22999 16.67L5.61999 15.71C6.11999 16.09 6.64999 16.41 7.23999 16.65L7.59999 19.19C7.64999 19.43 7.83999 19.6 8.07999 19.6H11.92C12.16 19.6 12.36 19.43 12.39 19.19L12.75 16.65C13.34 16.41 13.88 16.09 14.37 15.71L16.76 16.67C16.98 16.75 17.23 16.67 17.35 16.45L19.27 13.13C19.39 12.91 19.34 12.66 19.15 12.52L17.14 10.94ZM9.99999 13.6C8.01999 13.6 6.39999 11.98 6.39999 10C6.39999 8.02002 8.01999 6.40002 9.99999 6.40002C11.98 6.40002 13.6 8.02002 13.6 10C13.6 11.98 11.98 13.6 9.99999 13.6Z" />
                            </svg>
                            Settings
                        </Link>
                    </div>
                    <a className="row" onClick={() => { document.cookie = 'Exit=true'; history("/Binerals"); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M11 3V18H0V16H2V0H11V1H16V16H18V18H14V3H11ZM7 8V10H9V8H7Z" />
                        </svg>
                        Logout
                    </a>
                </nav>

                <div className='column'>
                    <section>
                        {
                            id === 'home' ?
                                <Home />
                                : id === 'chat' ?
                                    <Chat /> : <Settings />
                        }
                    </section>

                    <footer className='column'>
                        <div className="row">
                            {
                                ['Home', 'Chat', 'Settings'].map(link =>
                                    <Link to={`/Binerals/${link.toLowerCase()}`}>{link}</Link>
                                )
                            }
                        </div>
                        <span>
                            © Copyright 2020
                        </span>
                    </footer>
                </div>
            </main>
        </div>
    )
}