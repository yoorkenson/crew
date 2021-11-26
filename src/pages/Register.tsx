import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { RouteNames } from '../routes';

const Register: FC = () => {


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
                                <Link to={RouteNames.START} className='header__link'/>
                                <h1 className='header__title'>
                                    Let's get started
                                </h1>
                            </div>
                            
                        </div>
                        <RegisterForm/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;