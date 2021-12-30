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

const EventItem: FunctionComponent<EventItemProps> = ({item}: EventItemProps & { children?: ReactNode }) => {

    const {emoji, slug, date, membersId, location, time, group_size, description, chat} = item
    return (
        <>
            <Link to={`${RouteNames.EVENT_PAGE}/${item.id}`} className="events__item events__item_green">
                <div className="events__item__top">
                    {emoji}
                </div>
                <div className="events__item__main">
                    <h2 className="events__item__title">
                       {slug}
                    </h2>
                    <div className="events__item__info">
                        <div className="events__item__info__mini">
                            <img src={clock} alt="" className="events__item__icon"/>
                            <div className="events__item__text">
                                {date} {time}
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
                                2/{group_size}
                            </div>
                        </div>
                    </div>
                    <div className="events__item__descr">
                        {description}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default EventItem;