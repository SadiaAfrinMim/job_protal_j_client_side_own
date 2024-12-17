import React, { useContext } from 'react';
import AuthContex from '../Authprovider/AuthContex';
import loginImg from '../../src/assets/Animation - 1733906858041.json';
import Lottie from 'react-lottie';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { handleLogin, handleSignIn } = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password)
            .then((result) => {
                const user = { email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then((res) => {
                        console.log('JWT response:', res.data);
                        navigate(from);
                    });
            })
            .catch((error) => {
                console.error('Login failed:', error.message);
            });
    };

    const handleGoogleSignIn = () => {
        handleSignIn()
            .then((result) => {
                const user = { email: result.user.email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then((res) => {
                        console.log('JWT response:', res.data);
                        navigate(from);
                    });
            })
            .catch((error) => {
                console.error('Google sign-in failed:', error.message);
            });
    };

    const lottieOptions = {
        animationData: loginImg,
        loop: true,
        autoplay: true,
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <Lottie options={lottieOptions} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="btn btn-primary mt-4"
                            >
                                Google Sign-in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
