import React, { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';
import crew from '../assets/images/crewLogin.svg'
import { Field, Form, Formik } from 'formik';
import visible from '../assets/images/Visiblity.svg'
import notVisible from '../assets/images/nonVisiblity.svg'
import fb from '../assets/icons/fb.svg'
import google from '../assets/icons/google.svg'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Login: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth)

    // const history = useHistory()
    // const path = history.location.pathname

    const {login} = useActions()

    return (
        <div className="main__wrapper">
            <div className="main__header">
                Crewwww
            </div>
            <div className="main__wrapper__app">
                <div className='register'>
                    <div className="container">
                        <div className="header header_reg">
                            <div className="header__link__wrapper">
                                <Link to={RouteNames.START} className='header__link header_login'/>
                                <h1 className='header__title'>
                                    Login
                                </h1>
                            </div>
                        </div>
                        <div className="login__page">
                            <Formik
                            initialValues={{
                                username: '',
                                password: '',
                                eye: false,
                            }}
                            onSubmit={ (values) => {
                                values.username = values.username.replaceAll(/[+\(\)\ -]/g, '')
                                console.log(values)
                                login(values.username, values.password)
                            }}
                            >
                                {({ values }) => (
                                    <Form>
                                        <img src={crew} alt="logo" className="login__img"/>
                                        <div className="login__form">
                                            <Field required className='item__input login__form__input' type="text" name='username' placeholder='Email'/>
                                            <div className='login__password'>
                                                <Field required className='item__input login__form__input' type={values.eye ? 'text' : 'password'} name='password' placeholder='Password'/>
                                                <label className='item__input'>
                                                    <Field name='eye' type="checkbox" className="" style={{display: 'none'}}/>
                                                    <img className='social__item__visible' src={values.eye ? visible : notVisible} alt=""/>
                                                </label>
                                            </div>
                                            <div className="login__alt">
                                                <div className="login__alt__text">
                                                    Or login with
                                                </div>
                                                
                                                { error && <div className="login__alt__text" style={{color: 'red'}}>
                                                    {error}
                                                </div>}

                                                <div className="login__alt__links">
                                                    <a href="#" className="login__link">
                                                        <img src={fb} alt="" className="login__link__img"/>
                                                    </a>
                                                    <a href="#" className="login__link">
                                                        <img src={google} alt="" className="login__link__img"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <button type='submit' className="button button_login__page">
                                                {isLoading ? 'Loading' : 'Login'}
                                            </button>
                                            <a href='#' className="login__forgot">
                                                forgot username / password
                                            </a>
                                        </div>
                                    </Form>
                                )}
                                
                            </Formik>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;