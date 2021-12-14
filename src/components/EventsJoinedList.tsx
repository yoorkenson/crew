import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../routes';
import clock from '../assets/images/clock.svg'
import members from '../assets/images/members.svg'

const EventsJoinedList: FC = () => {
    return (
        <>
            <Link to={RouteNames.EVENT_PAGE} className="events__item events__item_green">
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
            </Link>
        </>
    );
};

export default EventsJoinedList;