import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';


const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
        return (
            <Switch>
                {(isAuth ? privateRoutes : publicRoutes).map(route => 
                    <Route  path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={route.path}/>
                )}
                {isAuth && <Redirect to={RouteNames.PROFILE}/>}
                {!isAuth && <Redirect to={RouteNames.START}/>}
            </Switch>
        );
    // }
};

export default AppRouter;