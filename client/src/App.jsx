import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboarg from './pages/Dashboard';
import ProductInfo from './pages/ProductInfo';

import UserProducts from './components/Dashbord/UserProducts';
import FormAddProducts from './components/Dashbord/FormAddProduct';

import { handlerFillUserInfoAction } from './redux/actions/login.action';

import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { token, user } = useSelector((store) => store.session);

    useEffect(() => {
        const handlerLoginWithToken = async () => {
            try {
                if (sessionStorage.getItem('token') && !token) {
                    const { data } = await axios.get(
                        `${
                            import.meta.env.VITE_APP_API_URL
                        }/api/v1/users/get-user`,
                        {
                            headers: {
                                Authorization: `Bearer ${sessionStorage.getItem(
                                    'token'
                                )}`
                            }
                        }
                    );
                    const { user } = data.data;

                    dispatch(
                        handlerFillUserInfoAction({
                            user,
                            token: sessionStorage.getItem('token')
                        })
                    );
                }
            } catch (error) {
                console.log(error);
            }
        };
        handlerLoginWithToken();
    }, [token]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        !token && !user ? <Login /> : <Navigate to={'/'} />
                    }
                />
                <Route
                    path="/dashboard"
                    element={token ? <Dashboarg /> : <Navigate to={'/'} />}
                >
                    <Route path="products" element={<UserProducts />} />
                    <Route path="productsAdd" element={<FormAddProducts />} />
                </Route>
                <Route path="/product/:id" element={<ProductInfo />} />
                <Route path="*" element={<div>error 404</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
