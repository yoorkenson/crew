import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import fb from '../assets/images/Variant6.svg'
import google from '../assets/images/Variant5.svg'
import tel from '../assets/images/Variant4.svg'
import { RouteNames } from '../routes';

const Crewwww: FC = () => {
    return (
        <>
            <div className= 'login'>
                <h1 className="login__title">
                    Crewwww
                </h1>
                <div className="container">
                    <Link to={RouteNames.LOGIN} className="button button_login">
                        Log in
                    </Link>
                    <Link to={RouteNames.REGISTER} className="button button_login button_login_register">
                        Sign up
                    </Link>
                    <div className="login__bottom">
                        Sign up with
                    </div>
                    <div className="login__links">
                        <a href="#" className="login__link">
                            <img src={fb} alt="" className="login__link__img"/>
                        </a>
                        <a href="#" className="login__link">
                            <img src={google} alt="" className="login__link__img"/>
                        </a>
                        {/* <Link to={RouteNames.REGISTER} className="login__link">
                            <img src={tel} alt="" className="login__link__img"/>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crewwww;