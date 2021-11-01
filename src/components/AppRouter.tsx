import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { allRoutes, RouteNames } from '../routes';


const AppRouter: FC = () => {

    return (
        <>
        <Switch>
            {allRoutes.map(route => 
                <Route  path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}/>
            )}
            <Redirect to={RouteNames.START}/>
        </Switch>
        </>
    );
};

export default AppRouter;