import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './Signup.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must not be more than 100 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/\d/, 'Must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
});

const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    if (password.length >= 6) strength += 1;
    return strength;
};

const Signup: React.FC = () => {
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();  // Use navigate for redirection

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPasswordStrength(calculatePasswordStrength(password));
    };

    const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
        setTimeout(() => {
            // Always store credentials in localStorage regardless of the "Remember me" state
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);

            alert('Sign Up Successful');
            setSubmitting(false);

            // Redirect to login page after successful sign-up
            navigate('/login');
        }, 500);
    };

    return (
        <div className="main">
            <h1>Registration Form</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, errors, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Name:
                            <Field name="name" type="text" className={errors.name ? 'error' : ''} />
                            <ErrorMessage className="error" name="name" component="div" />
                        </label>
                        <label htmlFor="email">
                            Email:
                            <Field name="email" type="email" className={errors.email ? 'error' : ''} />
                            <ErrorMessage className="error" name="email" component="div" />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <div style={{ position: 'relative' }}>
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handlePasswordChange(e);
                                        handleChange(e);
                                    }}
                                    className={errors.password ? 'error' : ''}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#ecf0f1',
                                    }}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <ErrorMessage className="error" name="password" component="div" />
                            <div className="progress-bar">
                                <div
                                    className={`progress-bar-fill strength-${passwordStrength}`}
                                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                                ></div>
                            </div>
                            <div className="password-strength-text">
                                Strength: {['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][passwordStrength - 1] || 'Weak'}
                            </div>
                        </label>
                        <label htmlFor="confirmPassword">
                            Confirm Password:
                            <Field name="confirmPassword" type="password" className={errors.confirmPassword ? 'error' : ''} />
                            <ErrorMessage className="error" name="confirmPassword" component="div" />
                        </label>

                        <div className="footer-container">
                            <div className="checkbox-container">
                                <label className="checkbox-label">
                                    <Field type="checkbox" name="rememberMe" />
                                    Autofill login
                                </label>
                            </div>
                            <div className="links-container">
                                <a href="/login" className="signin-link">
                                    Sign In
                                </a>
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Signup;
