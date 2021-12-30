import React, { FC, FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import membersIcon from '../assets/images/members.svg'
import { IEvent } from '../models/IEvent';
import { RouteNames } from '../routes';
import { EventDate } from './EventDate';

export interface EventItemProps {
    item: IEvent
    key: string
}

const EventItem: FunctionComponent<EventItemProps> = ({item}: EventItemProps & { children?: ReactNode }) => {

    const {color, emoji, members, group_size, description} = item
    
    return (
        <>
            <Link to={`${RouteNames.EVENT_PAGE}/${item.id}`} className={color}>
                <div className="events__item__top">
                    {emoji}
                </div>
                <div className="events__item__main">
                    <h2 className="events__item__title">
                       {item.title.rendered}
                    </h2>
                    <div className="events__item__info">
                        <EventDate event={item} />
                        <div className="events__item__info__mini">
                            <img src={membersIcon} alt="" className="events__item__icon"/>
                            <div className="events__item__text">
                                {members.length}/{group_size}
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