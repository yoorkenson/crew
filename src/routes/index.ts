import Crewwww from "../pages/Crewwww";
import Editor from "../pages/Editor";
import EventAdd from "../pages/EventAdd";
import EventPage from "../pages/EventDetails";
import Events from "../pages/Events";
import Login from "../pages/Login";
import MyEvents from "../pages/MyEvents";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Settings from "../pages/Settings";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    START = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    EDIT = '/edit',
    PROFILE = '/profile',
    EVENTS = '/events',
    EVENT_PAGE = '/event_page',
    MY_EVENTS = '/my_events',
    EVENT_ADD = '/event_add',
    SETTINGS = '/settings'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.START, exact: true, component: Crewwww
    },
    {
        path: RouteNames.LOGIN, exact: true, component: Login
    },
    {
        path: RouteNames.REGISTER, exact: true, component: Register
    }
]

export const privateRoutes: IRoute[] = [
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
        path: `${RouteNames.EVENT_PAGE}/:id`, exact: true, component: EventPage
    },
    {
        path: RouteNames.MY_EVENTS, exact: true, component: MyEvents
    },
    {
        path: RouteNames.EVENT_ADD, exact: true, component: EventAdd
    },
    {
        path: RouteNames.SETTINGS, exact: true, component: Settings
    }
]