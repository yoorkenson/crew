import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { RouteNames } from '../routes';
import clock from '../assets/images/clock.svg'
import members from '../assets/images/members.svg'
import EventsJoinedList from '../components/EventsJoinedList';
import EventsCreatedList from '../components/EventsCreatedList';

const MyEvents: FC = () => {
    const [events, setEvents] = useState('created')
    return (
        <>
            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">
                    
                    <div className="events">
                <div className="container">
                    <div className="header header_edit">
                        <div className="header__link__wrapper">
                            <Link to={RouteNames.EVENTS} className='header__link'/>
                            <h1 className='header__title'>
                            My Events
                            </h1>
                        </div>
                        <Link to={RouteNames.EVENTS} className='header__right'>
                            View all
                        </Link>
                    </div>
                    <div className="events__filter">
                        <select className='events__filter__item' value={events} onChange={e => setEvents(e.target.value)}>
                            <option value="created" selected>Events created</option>
                            <option value="joined">Events joined</option>
                        </select>
                    </div>
                    <div className="events__wrapper">
                        {
                            events==='created' ?
                            <EventsCreatedList/>
                            :
                            <EventsJoinedList/>
                        }
                        

                        

                    </div>
                </div>
            </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default MyEvents;