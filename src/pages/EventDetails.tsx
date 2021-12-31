import React, { FC, useEffect, useState } from 'react';

import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import avatar from '../assets/images/avatar.png'
import { Link, useParams } from 'react-router-dom';
import { RouteNames } from '../routes';
import { IEvent } from '../models/IEvent';
import { getPost, getUserName, joinEvent } from '../api/PostsService';
import { EventDate } from '../components/EventDate';
import { Spinner } from '../components/Spinner';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventDetailsParams {
    id: string
}


const EventDetails: FC = () => {

    const { id } = useParams<EventDetailsParams>();

    const [event, setEvent] = useState<IEvent | null>(null);
    const [authorName, setAuthorName] = useState<string>('');
    const [joined, setJoined] = useState(false);

    const currentUser = useTypedSelector(state => state.edit.editInfo);
    

    const fetchEvent = async (id: string) => {
        if (id) {
            const fetchedEvent = await getPost(id);
            if (fetchedEvent) setEvent(fetchedEvent); 
            setAuthorName(await getUserName((fetchedEvent as IEvent).author));
            if (currentUser.id) setJoined((fetchedEvent as IEvent).members.includes(currentUser.id));
        }
    }

    console.log({
        currentUser
    })

    useEffect(() => {
        fetchEvent(id);
    }, [id])


    const onJoin = () => {
        if ( joined ) return;
        joinEvent(parseInt(id)).then(res => {
            setJoined(res);
            fetchEvent(id);
        });
    }

    console.log({
        event,
        members: event?.members, 
        currentUser,
        joined
    })
    
    return (
        <div className="main__wrapper">
            <div className="main__header">
                Crewwww
            </div>
            <div className="main__wrapper__app">
                {event ? (
                    <div className='event'>
                        <div className="event__header event__header_pink">
                            <div className="container">
                                <div className="event__header__wrapper">
                                    <div className="header__link__wrapper">
                                        <Link to={RouteNames.EVENTS} className="event__header__subtitle__link"/>
                                        <div className="event__header__subtitle">
                                            {event?.emoji}
                                        </div>
                                    </div>
                                    <h1 className="event__header__title">
                                        {event?.title.rendered}
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
                                                    {event?.location} 
                                                </div>
                                            </div>
                                            <div className="events__item__info__mini">
                                                <img src={person} alt="" className="events__item__icon"/>
                                                <div className="events__item__text">
                                                    {event.members.length}/{event?.group_size}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event__info__top">
                                            <EventDate event={event} />
                                        </div>
                                    </div>
                                    <div className="events__item__descr">
                                        {event?.description} 
                                    </div>
                                    <div className="event__members">
                                        <div className="event__member__item">
                                            <img src={avatar} alt="" className="event__member__img"/>
                                            <div className="event__member__name">
                                                {authorName}
                                            </div>
                                            <div className="event__member__role">
                                                creator
                                            </div>
                                        </div>
                                    </div>
                                    {joined ? (
                                        <a className="button button_event" href={`https://wa.me/${currentUser.phone}`} target='_blank' rel='noreferrer'>
                                            {`https://wa.me/${currentUser.phone}`}
                                        </a>
                                    ) : (
                                        <button className="button button_event" onClick={onJoin}>Join</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <Spinner />}
            </div>
        </div>
    );
};



export default EventDetails;