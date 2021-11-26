import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { RouteNames } from '../routes';
import avatar from '../assets/images/avatar.png'

const Settings = () => {
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
                                    Jessica Tan
                                </div> 
                                <div className="settings__avatar">
                                    <img src={avatar} alt="" className="settings__avatar__image"/>
                                    <Link to={RouteNames.EDIT} className="settings__edit">
                                        Edit profile
                                    </Link>
                                </div>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Account settings
                                </Link>
                                <div className="divider"/>
                                <Link className='settings__link' to={RouteNames.EDIT}>
                                    Help center
                                </Link>
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