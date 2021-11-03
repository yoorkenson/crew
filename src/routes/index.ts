import Crewwww from "../pages/Crewwww";
import Editor from "../pages/Editor";
import EventPage from "../pages/EventDetails";
import Events from "../pages/Events";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    START = '/',
    REGISTER = '/register',
    EDIT = '/edit',
    PROFILE = '/profile',
    EVENTS = '/events',
    EVENT_PAGE = '/event_page'
}

export const allRoutes: IRoute[] = [
    {
        path: RouteNames.START, exact: true, component: Crewwww
    },
    {
        path: RouteNames.REGISTER, exact: true, component: Register
    },
    {
        path: RouteNames.EDIT, exact: true, component: Editor
    },
    {
        path: RouteNames.PROFILE, exact: true, component: Profile
    },
    {
        path: RouteNames.EVENTS, exact: true, component: Events
    },
    {
        path: RouteNames.EVENT_PAGE, exact: true, component: EventPage
    }
]