import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import visible from '../assets/images/Visiblity.svg'
import notVisible from '../assets/images/nonVisiblity.svg'
import ModalIncomplete from '../components/ModalIncomplete';
import ModalDiscard from '../components/ModalDiscard';
import { RouteNames } from '../routes';

const Editor: FC = () => {

    const [alcohol, setAlcohol] = useState(false)
    const [smoke, setSmoke] = useState(false)
    const handleChangeAclo = () => {
        return setAlcohol(!alcohol)
    }
    const handleChangeSmoke = () => {
        return setSmoke(!smoke)
    }

    return (
        <>
            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">
                <ModalIncomplete/>
                <ModalDiscard/>
                <div className="editor">
                    <div className="container">
                        <div className="header header_edit">
                            <Link to={RouteNames.REGISTER} className='header__title'>
                                Edit Profile
                            </Link>
                            <Link to={RouteNames.PROFILE} className='header__right'>
                                View
                            </Link>
                        </div>
                        <div className="editor__wrapper">
                            <div className="editor__photos">
                                <div className="title_black">
                                    My photos
                                </div>
                                <div className="editor__photos__wrapper">
                                    <div className="photo__item"></div>
                                    <div className="photo__item"></div>
                                    <div className="photo__item"></div>
                                    <div className="photo__item"></div>
                                    <div className="photo__item"></div>
                                    <div className="photo__item"></div>
                                </div>
                            </div>
                            <div className="editor__about">
                                <div className="title_black">
                                    About me
                                </div>
                                <textarea 
                                    maxLength={300}
                                    className='editor__about__textarea'
                                    placeholder='e.g. I am a laid back californian looking to make friends in la, I recently moved here from San Diego. I think im a pretty relaxed person, work in tech. I enjoy soaking in the sun, hiking, surfing, drinks and beach vibes.'
                                />
                            </div>
                            <div className="editor__info">
                                <div className="title_black">
                                    My basic info
                                </div>
                                <input type="text" placeholder='age' className="item__input"/>
                                <input type="text" placeholder='location' className="item__input"/>
                                <input type="text" placeholder='education' className="item__input"/>
                                <input type="text" placeholder='job' className="item__input"/>
                            </div>
                            <div className="editor__me">
                                <div className="title_black">
                                I am ...
                                </div>
                                <div className="me__wrapper">
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='chill'/>
                                        <span className="me__item">chill</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='adventurous'/>
                                        <span className="me__item">adventurous</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='empathetic'/>
                                        <span className="me__item">empathetic</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='introverted'/>
                                        <span className="me__item">introverted</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='extroverted'/>
                                        <span className="me__item">extroverted</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='funny'/>
                                        <span className="me__item">funny</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='bold'/>
                                        <span className="me__item">bold</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='intellectual'/>
                                        <span className="me__item">intellectual</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='sophisticated'/>
                                        <span className="me__item">sophisticated</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='outdoorsy'/>
                                        <span className="me__item">outdoorsy</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='quirky'/>
                                        <span className="me__item">quirky</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='spiritual'/>
                                        <span className="me__item">spiritual</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='philosophical'/>
                                        <span className="me__item">philosophical</span>
                                    </label>
                                </div>
                            </div>
                            <div className="editor__me">
                                <div className="title_black">
                                    My interests include ...
                                </div>
                                <div className="me__wrapper">
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='art'/>
                                        <span className="me__item">art</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='food (the good stuff)'/>
                                        <span className="me__item">food (the good stuff)</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='film'/>
                                        <span className="me__item">film</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='hikes'/>
                                        <span className="me__item">hikes</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='beach'/>
                                        <span className="me__item">beach</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='expllore the city'/>
                                        <span className="me__item">expllore the city</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='road tripping'/>
                                        <span className="me__item">road tripping</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='sports'/>
                                        <span className="me__item">sports</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='shopping'/>
                                        <span className="me__item">shopping</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='barbeque'/>
                                        <span className="me__item">barbeque</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='travel'/>
                                        <span className="me__item">travel</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='music'/>
                                        <span className="me__item">music</span>
                                    </label>
                                    <label className="me__checkbox">
                                        <input type="checkbox" value='gym / fitness'/>
                                        <span className="me__item">gym / fitness</span>
                                    </label>
                                    <button className="me__item_add">+Add</button>
                                </div>
                            </div>
                            <div className="editor__social">
                                <div className="title_black">
                                    My social preferences
                                </div>
                                <div className="editor__social__wrapper">
                                    <div className="social__item">
                                        <div className="social__item__left">
                                            <div className="social__item__text">
                                                Alcohol
                                            </div>
                                            <img src={alcohol ? visible : notVisible} alt="" className="social__item__visible"/>
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" onChange={handleChangeAclo}/>
                                            <span className="slider round">{alcohol ? 'Yes' : 'No'}</span>
                                        </label>
                                    </div>
                                    <div className="social__item">
                                        <div className="social__item__left">
                                            <div className="social__item__text">
                                                Smoking
                                            </div>
                                            <img src={smoke ? visible : notVisible} alt="" className="social__item__visible"/>
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" onChange={handleChangeSmoke}/>
                                            <span className="slider round">{smoke ? 'Yes' : 'No'}</span>
                                        </label>
                                    </div>
                                    <div className="social__item">

                                    </div>
                                </div>
                            </div>
                            <div className="editor__connect">
                                <div className="title_black">
                                    Connect Instagram
                                </div>
                                <div className="editor__connect__text">
                                    Not connected
                                </div>
                            </div>
                            <button className="button button_24">Save</button>
                        </div>
                    
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Editor;