import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import { RouteNames } from '../routes';
import avatar from '../assets/images/avatar.png'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Settings = () => {

    const {logout} = useActions()
    const history = useHistory()
    const path = history.location.pathname
    const {editInfo} = useTypedSelector(state => state.edit)

    return (
        <>
            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">
                    <Footer/>
                    <div className='register'>
                        <div className="container">
                            <div className="header header_reg">
                                <div className="header__link__wrapper">
                                    <Link to={RouteNames.EVENT_ADD} className='header__link'/>
                                    <h1 className='header__title'>
                                        Your Settings
                                    </h1>
                                </div>
                            </div>
                            <div className="settings">
                                <div className="title_black">
                                    {editInfo.name}
                                </div> 
                                <div className="settings__avatar">
                                    <img src={avatar} alt="" className="settings__avatar__image"/>
                                    <Link to={RouteNames.EDIT} className="settings__edit">
                                        Edit profile
                                    </Link>
                                </div>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Events created
                                </Link>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Events joined
                                </Link>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Account settings
                                </Link>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Help center
                                </Link>
                                <div className="divider"/>
                                <button className='settings__link' onClick={() => {
                                    logout()
                                    history.push(RouteNames.START)
                                }}>
                                    Logout
                                </button>
                                <div className="divider"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;