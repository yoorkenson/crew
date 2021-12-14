import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik'
// import { useTypedSelector } from '../hooks/useTypedSelector';
import { useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { RouteNames } from '../routes';

const RegisterForm: FC = () => {

    // const { registerInfo, isLoading, error } = useTypedSelector(state => state.register)
    const { setRegister } = useActions()

    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name:'',
                age:'',
                gender:'',
                phoneNumber:'',
                password:'',
                confirmPassword:'',
                termsCheck: false,
                emailCheck: false
            }}
            onSubmit={ values => {
                if (values.password === values.confirmPassword) {
                    setRegister(values)
                    history.push(RouteNames.EDIT)
                    console.log(values)
                } else {
                    alert('passwords must match')
                }
                
            }}
        >
            {({ values }) => (
            <Form className='register__form'>
                <div className="form__item">
                    <label htmlFor="name">
                        Name
                    </label>
                    <Field required className='item__input' type="text" name='name' placeholder='placeholder'/>
                </div>
                <div className="form__item">
                    <label htmlFor="age">
                        Age
                    </label>
                    <Field required className='item__input' type="tel" name='age' placeholder='placeholder'/>
                </div>
                <div className="form__item">
                    <label htmlFor="gender">
                        Gender
                    </label>
                    <Field as='select' required name="gender" className='form__item__select' placeholder='placeholder'>
                        <option value="" disabled selected>placeholder</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                </div>
                <div className="form__item">
                    <label htmlFor="phone">
                        Phone Number
                    </label>
                    <div className="phone">
                        <Field required className='item__input' type="tel" name='phoneNumber' placeholder='placeholder'/>
                        <button className='phone__OTP'>Send OTP</button>
                    </div>
                </div>
                <div className="form__item">
                    <label htmlFor="OTP">
                        Fill your OTP code below
                    </label>
                    <div className="OTP">
                        <input  type="tel" placeholder='0' name='OTP' maxLength={1}/>
                        <input  type="tel" placeholder='0' maxLength={1}/>
                        <input  type="tel" placeholder='0' maxLength={1}/>
                        <input  type="tel" placeholder='0' maxLength={1}/>
                        <input  type="tel" placeholder='0' maxLength={1}/>
                        <input  type="tel" placeholder='0' maxLength={1}/>
                    </div>
                    <Link to='/' className='OTP__code'>
                        Didn’t get a code? 
                    </Link>
                </div>
                <div className="form__item">
                    <label htmlFor="password">
                        Password
                    </label>
                    <Field required className='item__input' type="password" name='password' placeholder='placeholder'/>
                </div>
                <div className="form__item">
                    <label htmlFor="confirmPassword">
                        Confirm password
                    </label>
                    <Field required className='item__input' type="password" name='confirmPassword' placeholder='placeholder'/>
                </div>
                <div className='checkbox__item' >
                    <Field type='checkbox' name='termsCheck' />
                    <label>
                        I agree to Crewwww’s <Link to='' className='orange'>Terms and Conditions</Link>, and agree to being over 18 years of age
                    </label>
                </div>
                <div className='checkbox__item'>
                    <Field type='checkbox' name='emailCheck' />
                    <label htmlFor="emailCheck">
                        I want to recieve email marketing communications from Crewwww
                    </label>
                </div>
                    <button type='submit' className={values.termsCheck ? 'button' : 'button button_inactive '} disabled={!values.termsCheck}>
                        Sign up
                    </button>
            </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;