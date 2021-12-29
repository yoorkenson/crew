import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';
import Footer from '../components/Footer';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { RouteNames } from '../routes';

const Events: FC = () => {

    const { allEvents } = useTypedSelector(state => state.event)
    const {events} = allEvents

    const { getPosts } = useActions()
    useEffect(() => {
        getPosts()
    }, [])
    
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
                                <div className='header__title'>
                                    Events
                                </div>
                                <Link to={RouteNames.MY_EVENTS} className='header__right'>
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
                                {events.map((item: IEvent) => {
                                    console.log('IT IS AN EVENT ITEM')
                                    return (
                                        <EventItem 
                                            item={item}
                                            key={item.id}
                                        />
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;