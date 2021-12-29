import React, { FC, FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import clock from '../assets/images/clock.svg'
import sandClock from '../assets/images/clock_sand.svg'
import members from '../assets/images/members.svg'
import { IEvent } from '../models/IEvent';
import { RouteNames } from '../routes';

export interface EventItemProps {
    item: IEvent
    key: string
}

const EventItem: FunctionComponent<EventItemProps> = ({item, key}: EventItemProps & { children?: ReactNode }) => {


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
                    <div className="events__item__info">
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
                        <div className="events__item__info__mini">
                            <img src={members} alt="" className="events__item__icon"/>
                            <div className="events__item__text">
                                2/3
                            </div>
                        </div>
                    </div>
                    <div className="events__item__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    </div>
                </div>
            </Link>
            <Link to={RouteNames.EVENT_PAGE} className="events__item events__item_pink">
                <div className="events__item__top">
                    🍦🍦🍦
                </div>
                <div className="events__item__main">
                    <h2 className="events__item__title">
                        Lets get icecream at Telok Ayer!
                    </h2>
                    <div className="events__item__info">
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
                        <div className="events__item__info__mini">
                            <img src={members} alt="" className="events__item__icon"/>
                            <div className="events__item__text">
                                2/3
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

export default EventItem;