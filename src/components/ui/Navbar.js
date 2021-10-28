import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

import './Navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.auth);

    const handleLogin = () => {
        dispatch(startLogout());
    };

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">{name}</span>

            <button
                className="btn btn-outline-danger btn-salir"
                onClick={handleLogin}
            >
                <i className="fas fa-sign-out-alt"></i>
                <span>Salir</span>
            </button>
        </div>
    );
};
