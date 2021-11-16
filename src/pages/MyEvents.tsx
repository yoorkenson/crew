import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';
import Footer from '../components/Footer';
import { RouteNames } from '../routes';
import clock from '../assets/images/clock.svg'
import members from '../assets/images/members.svg'

const MyEvents: FC = () => {
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
                        <Link to={RouteNames.MY_EVENTS} className='header__title'>
                            My Events
                        </Link>
                        <Link to={RouteNames.EVENTS} className='header__right'>
                            View all
                        </Link>
                    </div>
                    <div className="events__filter">
                        <select className='events__filter__item'>
                            <option value="" selected>Events created</option>
                            <option value="">first</option>
                            <option value="">second</option>
                        </select>
                    </div>
                    <div className="events__wrapper">
                        
                    <div className="events__item events__item_green">
                        <div className="events__item__top">
                            🍃🍃🍃
                        </div>
                        <div className="events__item__main">
                            <h2 className="events__item__title">
                                Lunch @ Gardens by the bay
                            </h2>
                            <div className="events__item__info events__item__info_mevents">
                                <div className="events__item__info__mini events__item__info__mini_mr">
                                    <img src={clock} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        26/11/2021
                                    </div>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={members} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        3 people
                                    </div>
                                </div>
                            </div>
                            <div className="events__item__descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    );
};

export default MyEvents;