import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';
import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import clock from '../assets/images/clock.svg'
import avatar from '../assets/images/avatar.png'
import visible from '../assets/images/Visiblity.svg'
import calendar from '../assets/icons/calendar.svg'
import Picker from 'emoji-picker-react';
import { Field, Form, Formik } from 'formik'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addPost } from '../api/UserService';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    date: yup.string().required().matches(/^\d{4}\/\d{2}\/\d{2}$/, {message: 'Date should look like 2021/12/21'}),
    time: yup.string().required().matches(/^((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))$/, 'Time should look like 7:00 pm')
})

const EventAdd = () => {

    const [color, setColor] = useState('event__header event__header_grey')
    interface IEmojiData {
        emoji: string
    }

    const {editInfo} = useTypedSelector(state => state.edit)

    const history = useHistory();

    const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>();
    const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
        setChosenEmoji(emojiObject);
    };
    
    return (
        <div className="main__wrapper">
            <div className="main__header">
                Crewwww
            </div>
            <div className="main__wrapper__app">
                <Formik
                    initialValues={{
                        emoji: '',
                        title: '',
                        color: '',
                        location: '',
                        time: '',
                        date: '',
                        group_size: 0,
                        description: '',
                        // chat: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={ async values => {
                        const eventPost = {
                            title: values.title,
                            status: 'publish',
                            meta: {
                                emoji: `${chosenEmoji?.emoji}${chosenEmoji?.emoji}${chosenEmoji?.emoji}`,
                                color: color,
                                location: values.location,
                                time: values.time,
                                group_size: values.group_size,
                                description: values.description,
                                // chat: values.chat,
                                date: values.date,
                            }
                        }
                        await addPost(eventPost)
                        await history.push(RouteNames.EVENTS)
                    }}
                >
                {({ values, errors }) => (
                    <Form className='event'>
                        <div className={color}>
                            <div className="container">
                                <div className="event__header__wrapper">
                                    <div className="header__link__wrapper">
                                        <Link to={RouteNames.EVENTS} className="event__header__subtitle__link event__header__subtitle__link_18"/>
                                        <div className="event__header__emoji event__header__emoji_nm">
                                        <div className='event__header__edit__emoji'>
                                        {chosenEmoji ? (
                                            <span>{chosenEmoji.emoji}{chosenEmoji.emoji}{chosenEmoji.emoji}</span>
                                        ) : (
                                            <span>🍦🎉</span>
                                        )}
                                        <Picker onEmojiClick={onEmojiClick} />
                                        </div>

                                            <div className="event__header__edit">
                                                Use emojis to describe your event!
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="event__header__emoji">
                                        <Field required className='event__header__title event__header__title_input' type="text" name='title' placeholder='Add an event title'/>
                                        <div className="event__header__edit__buttons">
                                            <div className="event__header__edit">
                                                Select a banner Gradient
                                            </div>  
                                            <div className="event__header__buttons">
                                                <button onClick={() => setColor('events__item events__item_pink event__header event__header_pink')} className="event__header__button event__header__button_pink"/>
                                                <button onClick={() => setColor('events__item events__item_brown event__header event__header_brown')} className="event__header__button event__header__button_brown"/>
                                                <button onClick={() => setColor('events__item events__item_blue event__header event__header_blue')} className="event__header__button event__header__button_blue"/>
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
                                                <Field required className='events__item__text events__item__text_input' type="text" name='location' placeholder='Where is it?'/>
                                            </div>
                                            <div className="events__item__info__mini">
                                                <img src={person} alt="" className="events__item__icon"/>
                                                <Field as='select' required name="group_size" className='events__item__text events__item__text_input events__item__text_input-number' placeholder='Set group size 2-6'>
                                                    <option value="" disabled selected>Set group size 2-6</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="event__info__top">
                                            <div className="events__item__info__mini">
                                                <img src={clock} alt="" className="events__item__icon"/>
                                                <Field required className='events__item__text events__item__text_input' type="text" name='time' placeholder='At what time?'/>
                                            </div>
                                            <div className="events__item__info__mini">
                                                <img src={calendar} alt="" className="events__item__icon"/>
                                                <Field required className='events__item__text events__item__text_input' type="text" name='date' placeholder="What's date?"/>
                                            </div>
                                        </div>
                                        <div className="editor__about event__about">
                                            <div className="title_black">
                                                Event Description
                                            </div>
                                            <Field
                                                name='description' 
                                                as='textarea'
                                                maxLength={300}
                                                className='editor__about__textarea'
                                                placeholder='I really wanted to check out the seasonal flavors of icecream at Birds of Paradise in katong. Anyone interested in joining? we can walk around the area after. Feel free to join the group and send me a message, i’ll make a whatsapp group for those who join!'
                                            />
                                        </div>
                                        <div className="event__members">
                                            <div className="event__member__item">
                                                <img src={avatar} alt="" className="event__member__img"/>
                                                <div className="event__member__name">
                                                    {editInfo.name}
                                                </div>
                                                <div className="event__member__role">
                                                    creator
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="editor__about event__about">
                                            <div className="title_black">
                                                Chat
                                            </div>
                                            <div className="title_grey">
                                                (Users who join will contact you via whatsapp)
                                            </div>
                                            <div className="event__whatsapp">
                                                <img src={visible} alt="" className="social__item__visible"/>
                                                <Field required className='event__whatsapp__input' type="text" name='chat' placeholder="https://wa.me/yourlinkhere"/>
                                            </div>
                                        </div> */}
                                        <button type='submit' className="button button_event">Publish</button>
                                        {Object.keys(errors).length ? Object.values(errors)[0] : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>  
        </div>
    );
};

export default EventAdd;