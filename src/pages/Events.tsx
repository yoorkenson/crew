import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';
import Footer from '../components/Footer';
import { RouteNames } from '../routes';

const Events: FC = () => {
    return (
        <>
            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">
                <Footer/>
                    <div className="events">
                        <div className="container">
                        
                            <div className="header header_edit">
                                <Link to={RouteNames.PROFILE} className='header__title'>
                                    Events
                                </Link>
                                <Link to={RouteNames.EDIT} className='header__right'>
                                    My events
                                </Link>
                            </div>
                            <div className="events__filter">
                                <select className='events__filter__item'>
                                    <option value="" selected>Distance</option>
                                    <option value="">far</option>
                                    <option value="">not far</option>
                                </select>
                                <select className='events__filter__item'>
                                    <option value="" selected>Event type</option>
                                    <option value="">first</option>
                                    <option value="">second</option>
                                </select>
                            </div>
                            <div className="events__wrapper">
                                <EventItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;