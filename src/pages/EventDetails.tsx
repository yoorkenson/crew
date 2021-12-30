import React, { FC, useEffect, useRef, useState } from 'react';

import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import clock from '../assets/images/clock.svg'
import sandClock from '../assets/images/clock_sand.svg'
import avatar from '../assets/images/avatar.png'
import { Link, useParams } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

interface EventDetailsParams {
    id: string
}

const formatDateString = (dateString: string) => (
    dateString.slice(0, 4) + '/' + dateString.slice(4, 6) + '/' + dateString.slice(6, 8)
)

const getValidEventDate = (event: IEvent) => {
    const dateString = formatDateString(event.date);
    return new Date(`${dateString} ${event.time}`);
}

const getDateLabel = (date: Date) => {
    const today = new Date();
    if (today.getDate() === date.getDate()) return 'today';
    else if (today.getDate() === date.getDate() - 1) return 'tomorrow';
    return date.toLocaleDateString('en-us', {day: '2-digit', month: 'long', year: 'numeric'});
}

const getTimeLabel = (date: Date) => {
    return date.toLocaleTimeString('en-us', {hour12: true, minute: '2-digit', hour: 'numeric'})
}

const EventDetails: FC = () => {

    const { id } = useParams<EventDetailsParams>();

    const events = useTypedSelector(state => state.event.allEvents.events);

    const event = events.find(event => event.id === parseInt(id));

    const [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        if (event) setDate(getValidEventDate(event));
    }, [event]);
    
    return (
        <div className="main__wrapper">
            <div className="main__header">
                Crewwww
            </div>
            <div className="main__wrapper__app">
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
                                        2/{event?.group_size}
                                    </div>
                                </div>
                            </div>
                            <div className="event__info__top">
                                <div className="events__item__info__mini">
                                    <img src={clock} alt="" className="events__item__icon"/>
                                    <div className="events__item__text">
                                        { date && (
                                            getTimeLabel(date) + ' ' + getDateLabel(date)
                                        ) }
                                    </div>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={sandClock} alt="" className="events__item__icon"/>
                                    <div className="events__item__text events__item__text_orange">
                                        {date && <CountDown targetDate={date} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="events__item__descr">
                            {event?.description} 
                        </div>
                        <div className="event__members">
                            <div className="event__member__item">
                                <img src={avatar} alt="" className="event__member__img"/>
                                <div className="event__member__name">
                                    Jessica Tan
                                </div>
                                <div className="event__member__role">
                                    creator
                                </div>
                            </div>
                        </div>
                        <button className="button button_event">Join</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

interface TimerProps {
    targetDate: Date
}


const getDatesDifference = (start: Date, end: Date) => {
    const diffInSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    const daysDiff = Math.floor(diffInSeconds / 60 / 60 / 24);
    const hoursDiff = Math.floor(diffInSeconds / 60 / 60 % 24);

    if (daysDiff) return {daysDiff, hoursDiff};
    
    const minutesDiff = Math.floor(diffInSeconds / 60 % 60);
    const secondsDiff = diffInSeconds % 60;

    return {hoursDiff, minutesDiff, secondsDiff};
}

const twoDigit = (num: number) => num / 10 > 1 ? num : '0'+num;

const formatDatesDifference = (dateDifference: ReturnType<typeof getDatesDifference>) => {
    if (dateDifference.daysDiff) return `${dateDifference.daysDiff}days ${dateDifference.hoursDiff}h`;
    else if (dateDifference.minutesDiff) return [
        twoDigit(dateDifference.hoursDiff), 
        twoDigit(dateDifference.minutesDiff), 
        twoDigit(dateDifference.secondsDiff)
    ].join(':');
}

const CountDown = ({targetDate} : TimerProps) => {

    const [datesDifference, setDatesDifference] = useState<ReturnType<typeof getDatesDifference> | null>(null);
    const timerInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const tmpDatesDiff = getDatesDifference(new Date(), targetDate);
        if (!tmpDatesDiff.daysDiff) {
            timerInterval.current = setInterval(() => {
                setDatesDifference(getDatesDifference(new Date(), targetDate));
            }, 1000)
        }
        setDatesDifference(tmpDatesDiff);
        return () => {
            if (timerInterval.current) clearInterval(timerInterval.current)
        };
    }, [setDatesDifference, targetDate])

    return (
        <>
            {datesDifference && formatDatesDifference(datesDifference)}
        </>
    )
};

export default EventDetails;