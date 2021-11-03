import React, { FC } from 'react';
import EventItem from '../components/EventItem';
import Footer from '../components/Footer';

const Events: FC = () => {
    return (
        <>
            <Footer/>
            <div className="events">
                <div className="container">
                    <div className="header header_events">
                        <div className='header__title_events'>
                            Events
                        </div>
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
                        <EventItem/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;