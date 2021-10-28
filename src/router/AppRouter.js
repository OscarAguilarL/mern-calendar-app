import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return <h5>Espere...</h5>;
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        isAuthenticated={!!uid}
                        component={LoginScreen}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAuthenticated={!!uid}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
