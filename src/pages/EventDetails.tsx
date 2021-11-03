import React, { FC } from 'react';

import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import clock from '../assets/images/clock.svg'
import sandClock from '../assets/images/clock_sand.svg'
import avatar from '../assets/images/avatar.png'
import { Link } from 'react-router-dom';
import { RouteNames } from '../routes';

const EventDetails: FC = () => {
    return (
        <div className='event'>
            <div className="event__header event__header_pink">
                <div className="container">
                    <div className="event__header__wrapper">
                        <Link to={RouteNames.EVENTS} className="event__header__subtitle">
                            🍦🍦🍦
                        </Link>
                        <h1 className="event__header__title">
                            Lets get icecream at Telok Ayer!
                        </h1>
                    </div>
                </div>
            </div>
            <div className="event__main">
                <div className="container">
                    <div className="event__wrapper">
                        <div className="event__info">
                            <div className="event__info__top">
                                <div className="events__item__info__mini">
                                    <img src={location} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        Gardens by the bay 
                                    </div>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={person} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        2/3
                                    </div>
                                </div>
                            </div>
                            <div className="event__info__top">
                                <div className="events__item__info__mini">
                                    <img src={clock} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        3pm Today
                                    </div>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={sandClock} alt="" className="events__item__icon"/>
                                    <div className="events__item__text events__item__text_orange">
                                        01:59:25
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="events__item__descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        </div>
                        <div className="event__members">
                            <div className="event__member__item">
                                <img src={avatar} alt="" className="event__member__img"/>
                                <div className="event__member__name">
                                    Jessica Tan
                                </div>
                                <div className="event__member__role">
                                    creator
                                </div>
                            </div>
                        </div>
                        <button className="button button_event">Join</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;