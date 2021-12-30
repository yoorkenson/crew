import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { IEvent } from '../models/IEvent';
import EventItem from './EventItem';

const EventsCreatedList: FC = () => {

    const { allEvents } = useTypedSelector(state => state.event)
    const {id} = useTypedSelector(state => state.edit.editInfo)
    const {myEvents} = allEvents

    const { getCreatedPosts } = useActions()
    useEffect(() => {
        getCreatedPosts(id!)
    }, [])


    return (
        <>
            {myEvents.map((item: IEvent) => {
                console.log('IT IS AN EVENT ITEM')
                return (
                    <EventItem 
                        item={item}
                        key={`${item.id}`}
                    />
                )
            })}
        </>
    );
};

export default EventsCreatedList;