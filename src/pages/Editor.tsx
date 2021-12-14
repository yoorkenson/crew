import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import visible from '../assets/images/Visiblity.svg'
import notVisible from '../assets/images/nonVisiblity.svg'
import ModalIncomplete from '../components/ModalIncomplete';
import ModalDiscard from '../components/ModalDiscard';
import ModalTags from '../components/ModalTags';
import { RouteNames } from '../routes';
import FormImage from '../components/FormImage';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Field, Form, Formik } from 'formik';
import MeCheckboxes from '../components/MeCheckboxes';
import { useActions } from '../hooks/useActions';

const Editor: FC = () => {

    const {registerInfo} = useTypedSelector(state => state.register)
    const {editInfo} = useTypedSelector(state => state.edit)
    const { setEdit } = useActions()


    useEffect(() => {

    }, [])

    const amList = ['chill', 'adventurous', 'empathic', 'introverted',
    'extroverted', 'funny', 'bold', 'intellectual', 'sophisticated',
    'outdoorsy', 'quirky', 'spiritual', 'philosophical'
    ]

    const {list} = useTypedSelector(state => state.editList)

    // const interestsList = ['art', 'food (the good stuff)', 'film', 
    // 'hikes', 'beach', 'explore the city', 'road tripping', 'sports',
    // 'shopping', 'barbeque', 'travel', 'music', 'gym / fitness'
    // ]
    // с 13-го элемента
    // console.log(editInfo.interestsCheck)


    // const newInterestsList = interestsList.concat(editInfo.interestsCheck.filter(item => !interestsList.includes(item)))

    const history = useHistory();

    const [modalDisc, setModalDisc] = useState(false)
    const [modalInc, setModalInc] = useState(false)
    const [modalTag, setModalTag] = useState(false)

    const openDisc = () => {
        setModalDisc(true)
    }

    return (
        <>
            <ModalIncomplete modalInc={modalInc} setModalInc={setModalInc}/>
            <ModalDiscard modalDisc={modalDisc} setModalDisc={setModalDisc}/>
            <ModalTags modalTag={modalTag} setModalTag={setModalTag}/>

            <div className="main__wrapper">
                <div className="main__header">
                    Crewwww
                </div>
                <div className="main__wrapper__app">

                <div className="editor">
                    <div className="container">
                        <div className="header header_edit">
                            <div className="header__link__wrapper">
                                <div onClick={openDisc} className='header__link'/>
                                <h1 className='header__title'>
                                Edit Profile
                                </h1>
                            </div>
                            <Link to={RouteNames.PROFILE} className='header__right'>
                                View
                            </Link>
                        </div>
                        <Formik
                            initialValues={{
                                about:editInfo.about,
                                age:registerInfo.age,
                                location:editInfo.location,
                                education:editInfo.education,
                                job:editInfo.job,
                                amCheck: editInfo.amCheck,
                                interestsCheck: editInfo.interestsCheck,
                                alcohol: editInfo.alcohol,
                                alcoholVisible: editInfo.alcoholVisible,
                                smoking: editInfo.smoking,
                                smokingVisible: editInfo.smokingVisible
                            }}
                            onSubmit={ values => {
                                    setEdit(values)
                                    console.log(values)
                                    if (values.about!=='' && values.age!=='' &&
                                        values.amCheck.length !== 0 && values.education!=='' && values.interestsCheck.length !== 0 &&
                                        values.job!=='' && values.location!=='')
                                    {
                                        setEdit(values)
                                        history.push(RouteNames.PROFILE)
                                    } else {
                                        setEdit(values)
                                        setModalInc(true)
                                    }
                                    
                                    
                                
                            }}
                        >
                            {({ values }) => (
                            <Form className="editor__wrapper">
                                <div className="editor__photos">
                                    <div className="title_black">
                                        My photos
                                    </div>
                                    <div className="editor__photos__wrapper">
                                        <FormImage/>
                                        <FormImage/>
                                        <FormImage/>
                                        <FormImage/>
                                        <FormImage/>
                                        <FormImage/>

                                    </div>
                                </div>
                                <div className="editor__about">
                                    <div className="title_black">
                                        About me
                                    </div>
                                    <Field
                                        name='about' 
                                        as='textarea'
                                        maxLength={300}
                                        className='editor__about__textarea'
                                        placeholder='e.g. I am a laid back californian looking to make friends in la, I recently moved here from San Diego. I think im a pretty relaxed person, work in tech. I enjoy soaking in the sun, hiking, surfing, drinks and beach vibes.'
                                    />
                                </div>
                                <div className="editor__info">
                                    <div className="title_black">
                                        My basic info
                                    </div>
                                    <Field name='age' type="text" placeholder='age' className="item__input"/>
                                    <Field name='location' type="text" placeholder='location' className="item__input"/>
                                    <Field name='education' type="text" placeholder='education' className="item__input"/>
                                    <Field name='job' type="text" placeholder='job' className="item__input"/>
                                </div>
                                <div className="editor__me">
                                    <div className="title_black">
                                    I am ...
                                    </div>
                                    <MeCheckboxes items={amList} name='amCheck' add={false}/>
                                </div>
                                <div className="editor__me">
                                    <div className="title_black">
                                        My interests include ...
                                    </div>
                                    <MeCheckboxes items={list} name='interestsCheck' add={true}/>
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
                                                <label>
                                                    <Field name='alcoholVisible' type="checkbox" style={{display: 'none'}}/>
                                                    <img src={values.alcoholVisible ? visible : notVisible} alt="" className="social__item__visible"/>
                                                </label>
                                            </div>
                                            <label className="switch">
                                                <Field name='alcohol' type="checkbox"/>
                                                <span className="slider round">{values.alcohol ? 'Yes' : 'No'}</span>
                                            </label>
                                        </div>
                                        <div className="social__item">
                                            <div className="social__item__left">
                                                <div className="social__item__text">
                                                    Smoking
                                                </div>
                                                <label>
                                                    <Field name='smokingVisible' type="checkbox" style={{display: 'none'}}/>
                                                    <img src={values.smokingVisible ? visible : notVisible} alt="" className="social__item__visible"/>
                                                </label>
                                            </div>
                                            <label className="switch">
                                                <Field name='smoking' type="checkbox" style={{display: 'none'}}/>
                                                <span className="slider round">{values.smoking ? 'Yes' : 'No'}</span>
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
                                <button type='submit' className="button button_24">Save</button>
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Editor;