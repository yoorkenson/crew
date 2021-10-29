import Crewwww from "../pages/Crewwww";
import Register from "../pages/Register";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    START = '/',
    REGISTER = '/register',
    REGISTER_PROFILE = '/register_profile',
    PROFILE = '/profile',
    EVENTS = '/events'
}

export const Routes: IRoute[] = [
    {
        path: RouteNames.START, exact: true, component: Crewwww
    },
    {
        path: RouteNames.REGISTER, exact: true, component: Register
    }
]