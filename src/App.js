import './App.scss';
import Login from './Components/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabinet from './Components/Cabinet/cabinet';

export default function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />

                    <Route path='/:id' element={<Cabinet />} />

                    <Route path='/' element={<Cabinet />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}