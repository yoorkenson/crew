import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../routes';
import clock from '../assets/images/clock.svg'
import members from '../assets/images/members.svg'
import { IEvent } from '../models/IEvent';
import { getCertainPosts } from '../api/PostsService';
import { useTypedSelector } from '../hooks/useTypedSelector';
import EventItem from './EventItem';
import { Spinner } from './Spinner';

const EventsJoinedList: FC = () => {

    const [events, setEvents] = useState<IEvent[] | null>(null);    

    const currentUser = useTypedSelector(state => state.edit.editInfo);
    
    useEffect(() => {
        if (currentUser) getCertainPosts(currentUser.joined_events).then(fetchedEvents => setEvents(fetchedEvents));
    }, [currentUser, setEvents])

    console.log({events, currentUser});
    
    return (
        <>
            {events ? (
                events.map(event => <EventItem item={event} key={`${event.id}`} />)
            ) : <Spinner />}
            
        </>
    );
};

export default EventsJoinedList;