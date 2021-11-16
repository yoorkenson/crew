import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteNames } from '../routes';
import { Field, useFormik } from 'formik'

const RegisterForm: FC = () => {

    const formik = useFormik({
        initialValues: {
            name:'',
            age:'',
            gender:'',
            phone:'',
            termsChange:false,
            emailChange:false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            console.log(JSON.stringify(values, null, 2))
        }
    })

    return (
        <form  onSubmit={formik.handleSubmit} className='register__form'>
        <div className="form__item">
            <label htmlFor="name">
                Name
            </label>
            <input value={formik.values.name} onChange={formik.handleChange} required className='item__input' type="text" name='name' placeholder='placeholder'/>
        </div>
        <div className="form__item">
            <label htmlFor="age">
                Age
            </label>
            <input value={formik.values.age} onChange={formik.handleChange} required className='item__input' type="tel" name='age' placeholder='placeholder'/>
        </div>
        <div className="form__item">
            <label htmlFor="gender">
                Gender
            </label>
            <select value={formik.values.gender} onChange={formik.handleChange} required name="gender" className='form__item__select' placeholder='placeholder'>
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
                <input value={formik.values.phone} onChange={formik.handleChange} required className='item__input' type="tel" name='phone' placeholder='placeholder'/>
                <button className='phone__OTP'>Send OTP</button>
            </div>
        </div>
        <div className="form__item">
            <label htmlFor="OTP">
                Fill your OTP code below
            </label>
            <div className="OTP">
                <input required type="tel" placeholder='0' name='OTP' maxLength={1}/>
                <input required type="tel" placeholder='0' maxLength={1}/>
                <input required type="tel" placeholder='0' maxLength={1}/>
                <input required type="tel" placeholder='0' maxLength={1}/>
                <input required type="tel" placeholder='0' maxLength={1}/>
                <input required type="tel" placeholder='0' maxLength={1}/>
            </div>
            <Link to='/' className='OTP__code'>
                Didn’t get a code? 
            </Link>
        </div>
        <div className='checkbox__item'>
            <input type="checkbox" name="termsChange"/>
            <label htmlFor="termsChange">
                I agree to Crewwww’s <Link to='' className='orange'>Terms and Conditions</Link>, and agree to being over 18 years of age
            </label>
        </div>
        <div className='checkbox__item'>
            <input type="checkbox" name="emailChange"/>
            <label htmlFor="email">
                I want to recieve email marketing communications from Crewwww
            </label>
        </div>
        {/* <NavLink to={RouteNames.EDIT}> */}
            <button type='submit' className='button'
            // className={termsChange ? 'button' : 'button '} disabled={!termsChange}
            >
                Sign up
            </button>
        {/* </NavLink> */}
        
    </form>
    );
};

export default RegisterForm;