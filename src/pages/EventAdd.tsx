import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../routes';
import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import clock from '../assets/images/clock.svg'
import avatar from '../assets/images/avatar.png'
import visible from '../assets/images/Visiblity.svg'
import calendar from '../assets/icons/calendar.svg'

const EventAdd = () => {
    return (
        <div className="main__wrapper">
            <div className="main__header">
                Crewwww
            </div>
            <div className="main__wrapper__app">
                <div className='event'>
            <div className="event__header event__header_grey">
                <div className="container">
                    <div className="event__header__wrapper">
                        <Link to={RouteNames.EVENTS} className="event__header__subtitle"/>
                        <div className="event__header__emoji">
                            <input className='event__header__edit__emoji' type="text" placeholder='🍦🎉'/>
                            <div className="event__header__edit">
                                Use emojis to describe your event!
                            </div>
                        </div>
                        <div className="event__header__emoji">
                            <input className='event__header__title event__header__title_input' type="text" placeholder='Add an event title'/>
                            <div className="event__header__edit__buttons">
                                <div className="event__header__edit">
                                    Select a banner Gradient
                                </div>  
                                <div className="event__header__buttons">
                                    <button className="event__header__button event__header__button_pink"/>
                                    <button className="event__header__button event__header__button_brown"/>
                                    <button className="event__header__button event__header__button_blue"/>
                                </div>
                            </div>
                        </div>
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
                                    <input className="events__item__text events__item__text_input" placeholder='Where is it?'/>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={person} alt="" className="events__item__icon"/>
                                    <select className="events__item__text events__item__text_input events__item__text_input-number" placeholder='Set group size 2-6'>
                                        <option value="" disabled selected>Set group size 2-6</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="event__info__top">
                                <div className="events__item__info__mini">
                                    <img src={clock} alt="" className="events__item__icon"/>
                                    <input className="events__item__text events__item__text_input" placeholder='At what time?'/>
                                </div>
                                <div className="events__item__info__mini">
                                    <img src={calendar} alt="" className="events__item__icon"/>
                                    <input className="events__item__text events__item__text_input" placeholder="What's date?"/>
                                </div>
                            </div>
                            <div className="editor__about event__about">
                                <div className="title_black">
                                    Event Description
                                </div>
                                <textarea 
                                    maxLength={300}
                                    className='editor__about__textarea'
                                    placeholder='e.g. I am a laid back californian looking to make friends in la, I recently moved here from San Diego. I think im a pretty relaxed person, work in tech. I enjoy soaking in the sun, hiking, surfing, drinks and beach vibes.'
                                />
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
                            <div className="editor__about event__about">
                                <div className="title_black">
                                    Chat
                                </div>
                                <div className="title_grey">
                                    (Users who join will contact you via whatsapp)
                                </div>
                                <div className="event__whatsapp">
                                    <img src={visible} alt="" className="social__item__visible"/>
                                    <input type="text" className='event__whatsapp__input' placeholder='https://wa.me/yourlinkhere'/>
                                </div>
                            </div>
                            <button className="button button_event">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>  
        </div>
    );
};

export default EventAdd;