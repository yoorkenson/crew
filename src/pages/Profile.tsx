import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../routes';
import person from '../assets/images/person.svg'
import location from '../assets/images/location.svg'
import edu from '../assets/images/edu.svg'
import alcohol from '../assets/images/alcohol.svg'
import portfolio from '../assets/images/portfolio.svg'
import smoke from '../assets/images/smoke.svg'
import sqImage from '../assets/images/Rectangle.jpg'
import Footer from '../components/Footer';

const Profile: FC = () => {
    return (
        <>
            <Footer/>
            <div className="profile">
                <div className="container">
                    <div className="header header_edit">
                        <Link to={RouteNames.EVENTS} className='header__title'>
                            View Profile
                        </Link>
                        <Link to={RouteNames.EDIT} className='header__right'>
                            Edit
                        </Link>
                    </div>
                    <div className="profile__slider">
                        <div className="title_black">
                            Jessica Tan
                        </div>
                        <div className="profile__slider__wrapper">
                            SLIDER
                        </div>
                    </div>
                    <div className="profile__about">
                        <div className="title_black">
                            About me
                        </div>
                        <div className="profile__about__text">
                        I am a laid back californian looking to make friends in la, I recently moved here from San Diego. I think im a pretty relaxed person, work in tech. I enjoy soaking in the sun, hiking, surfing, drinks and beach vibes.        
                        </div>
                    </div>
                    <div className="profile__basic">
                        <div className="title_black">
                            My basic info
                        </div>
                        <div className="profile__basic__wrapper">
                            <div className="profile__basic__item">
                                <img src={person} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    28
                                </p>
                            </div>
                            <div className="profile__basic__divider">|</div>
                            <div className="profile__basic__item">
                                <img src={location} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    tanjong pagar
                                </p>
                            </div>
                            <div className="profile__basic__divider">|</div>
                            <div className="profile__basic__item">
                                <img src={edu} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    usc
                                </p>
                            </div>
                            <div className="profile__basic__divider">|</div>
                            <div className="profile__basic__item">
                                <img src={alcohol} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    yes
                                </p>
                            </div>
                            <div className="profile__basic__divider">|</div>
                            <div className="profile__basic__item">
                                <img src={portfolio} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    accountant
                                </p>
                            </div>
                            <div className="profile__basic__divider">|</div>
                            <div className="profile__basic__item">
                                <img src={smoke} alt="" className="profile__basic__icon"/>
                                <p className="profile__basic__text">
                                    yes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="profile__me">
                        <div className="title_black">
                            I am ...
                        </div>
                        <div className="profile__me__wrapper">
                            <div className="profile__me__item">
                                chill
                            </div>
                            <div className="profile__me__item">
                                adventurous 
                            </div>
                            <div className="profile__me__item">
                                bold
                            </div>
                            <div className="profile__me__item">
                                introverted
                            </div>
                            <div className="profile__me__item">
                                quirky
                            </div>
                            <div className="profile__me__item">
                                funny
                            </div>
                            <div className="profile__me__item">
                                spiritual
                            </div>
                        </div>
                    </div>
                    <div className="profile__me profile__interests">
                        <div className="title_black">
                            My interests include ...
                        </div>
                        <div className="profile__me__wrapper profile__interests__wrapper">
                            <div className="profile__me__item">
                                art
                            </div>
                            <div className="profile__me__item">
                                food (the good stuff) 
                            </div>
                            <div className="profile__me__item">
                                film
                            </div>
                            <div className="profile__me__item">
                                hikes
                            </div>
                            <div className="profile__me__item">
                                beach
                            </div>
                            <div className="profile__me__item">
                                explore the city
                            </div>
                        </div>
                    </div>
                    <div className="profile__instagram">
                        <div className="title_black">
                            Instagram
                        </div>
                        <div className="profile__instagram__photos">
                            <div className="profile__instagram__wrapper">
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                                <img src={sqImage} alt="" className="profile__instagram__img"/>
                            </div>
                            <div className="profile__instagram__slides">. . .</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;