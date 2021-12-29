import React, { FC, useEffect } from 'react';
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
import Slider from '../components/Slider';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Profile: FC = () => {

    const {registerInfo} = useTypedSelector(state => state.register)
    const {editInfo} = useTypedSelector(state => state.edit)

    const { getProfileInfo } = useActions()
    useEffect(() => {
            getProfileInfo()
    }, [])
    return (
        <>
            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">
                    <Footer/>
                    <div className="profile">
                <div className="container">
                    <div className="header header_edit">
                        <div className="header__link__wrapper">
                            <Link to={RouteNames.EVENTS} className='header__link'/>
                            <h1 className='header__title'>
                            View Profile
                            </h1>
                        </div>
                        <Link to={RouteNames.EDIT} className='header__right'>
                            Edit
                        </Link>
                    </div>
                    <div className="profile__slider">
                        <div className="title_black">
                            {editInfo.name}
                        </div>
                        <div className="profile__slider__wrapper">
                            <Slider/>
                        </div>
                    </div>
                    <div className="profile__about">
                        <div className="title_black">
                            About me
                        </div>
                        <div className="profile__about__text">
                            {editInfo.about}
                        </div>
                    </div>
                    <div className="profile__basic">
                        <div className="title_black">
                            My basic info
                        </div>
                        <div className="profile__basic__wrapper">
                            { editInfo.age!=='' &&
                                <div className="profile__basic__item">
                                    <img src={person} alt="" className="profile__basic__icon"/>
                                    <p className="profile__basic__text">
                                        {editInfo.age}
                                    </p>
                                </div>
                            }
                            { editInfo.location!=='' &&
                                <>
                                <div className="profile__basic__divider">|</div>
                                <div className="profile__basic__item">
                                    <img src={location} alt="" className="profile__basic__icon"/>
                                    <p className="profile__basic__text">
                                        {editInfo.location}
                                    </p>
                                </div>
                                </>
                            }
                            { editInfo.education!=='' &&
                                <>
                                <div className="profile__basic__divider">|</div>
                                <div className="profile__basic__item">
                                    <img src={edu} alt="" className="profile__basic__icon"/>
                                    <p className="profile__basic__text">
                                        {editInfo.education}
                                    </p>
                                </div>
                                </>
                            }
                            {editInfo.alcohol_visible &&  
                                <>
                                    <div className="profile__basic__divider">|</div>
                                    <div className="profile__basic__item">
                                        <img src={alcohol} alt="" className="profile__basic__icon"/>
                                        <p className="profile__basic__text">
                                            {editInfo.alcohol ? 'Yes' : 'No'}
                                        </p>
                                    </div>
                                </>
                            }
                            { editInfo.job!=='' &&
                                <>
                                <div className="profile__basic__divider">|</div>
                                <div className="profile__basic__item">
                                    <img src={portfolio} alt="" className="profile__basic__icon"/>
                                    <p className="profile__basic__text">
                                        {editInfo.job}
                                    </p>
                                </div>
                                </>
                            }
                            {editInfo.smoking_visible && 
                                <>
                                <div className="profile__basic__divider">|</div>
                                <div className="profile__basic__item">
                                    <img src={smoke} alt="" className="profile__basic__icon"/>
                                    <p className="profile__basic__text">
                                        {editInfo.smoking ? 'Yes' : 'No'}
                                    </p>
                                </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="profile__me">
                        <div className="title_black">
                            I am ...
                        </div>
                        <div className="profile__me__wrapper">
                            {editInfo.am_list && editInfo.am_list.map(item => {
                                return item ?(
                                    <div className="profile__me__item" key={item}>
                                        {item}
                                    </div>
                                ) : null
                            })}
                        </div>
                    </div>
                    <div className="profile__me profile__interests">
                        <div className="title_black">
                            My interests include ...
                        </div>
                        <div className="profile__me__wrapper profile__interests__wrapper">
                            {editInfo.interests_list && editInfo.interests_list.map(item => {
                                return item ?(
                                    <div className="profile__me__item" key={item}>
                                        {item}
                                    </div>
                                ) : null
                            })}
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
                </div>
            </div>
        </>
    );
};

export default Profile;