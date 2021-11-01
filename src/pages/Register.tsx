import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteNames } from '../routes';

const Register: FC = () => {
    return (
        <div className='register'>
            <div className="container">
                <div className="header header_reg">
                    <Link to={RouteNames.START} className='header__title'>
                        Let's get started
                    </Link>
                </div>
                <form  action="" className='register__form'>
                    <div className="form__item">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input className='item__input' type="text" name='name' placeholder='placeholder'/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="age">
                            Age
                        </label>
                        <input className='item__input' type="tel" name='age' placeholder='placeholder'/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="gender">
                            Gender
                        </label>
                        <select name="gender" className='form__item__select' placeholder='placeholder'>
                            <option value="" disabled selected>placeholder</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form__item">
                        <label htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="phone">
                            <input className='item__input' type="tel" name='phone' placeholder='placeholder'/>
                            <button className='phone__OTP'>Send OTP</button>
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="OTP">
                            Fill your OTP code below
                        </label>
                        <div className="OTP">
                            <input type="tel" placeholder='0' name='OTP' maxLength={1}/>
                            <input type="tel" placeholder='0' maxLength={1}/>
                            <input type="tel" placeholder='0' maxLength={1}/>
                            <input type="tel" placeholder='0' maxLength={1}/>
                            <input type="tel" placeholder='0' maxLength={1}/>
                            <input type="tel" placeholder='0' maxLength={1}/>
                        </div>
                        <button className='OTP__code'>
                            Didn’t get a code? 
                        </button>
                    </div>
                    <div className='checkbox__item'>
                        <input type="checkbox" name="terms"/>
                        <label htmlFor="terms">
                            I agree to Crewwww’s <Link to='' className='orange'>Terms and Conditions</Link>, and agree to being over 18 years of age
                        </label>
                    </div>
                    <div className='checkbox__item'>
                        <input type="checkbox" name="email"/>
                        <label htmlFor="email">
                            I want to recieve email marketing communications from Crewwww
                        </label>
                    </div>
                    <NavLink to={RouteNames.EDIT}>
                        <input type='submit' className='button' value="Sign up "/>
                    </NavLink>
                    
                </form>
            </div>
        </div>
    );
};

export default Register;