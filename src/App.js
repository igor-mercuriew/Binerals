import Login from './Components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabinet from './Components/Cabinet/cabinet';
import Toast from './Components/toast/Toast';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/Binerals' element={<Login />} />

                    <Route path='/Binerals/:id' element={<Cabinet />} />
                </Routes>
            </BrowserRouter>

            <Toast />
        </div>
    );
}