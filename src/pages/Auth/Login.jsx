import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";

const Login = () => {
    const EMAIL_REGEX = new RegExp(
        "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
    );

    const navigate = useNavigate();

    const [userDetail, setUserDetail] = useState({
        email: "",
        password: "",
    });

    const { email, password } = userDetail;

    const handleChange = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    };
    return (
        <main className="auth_container main">
            <form>
                <div className="title">
                    <h2>Log In</h2>
                </div>
                <div className="input__container email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type here"
                        id="email"
                        onChange={handleChange}
                    />
                </div>

                <div className="input__container password">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Must be atleast 8 characters"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>

                <div className="input__container-cta">
                    <div className="checkbox">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember"> Remember me </label>
                    </div>
                    <Link to={"/"} className="forgot">
                        Forgot your password?
                    </Link>
                </div>

                <div className="btn login__btn" onClick={() => {}}>
                    Log In
                </div>

                <div className="login__container">
                    <p>
                        Not a Member?
                        <Link to={"/signup"}>
                            <strong>Sign Up</strong>
                        </Link>
                    </p>
                </div>

                <div className="copy legal">
                    <p>
                        <span className="small">
                            By continuing, you agree to accept our
                            <br />
                            <Link to={"/"}>Privacy Policy</Link> &amp;
                            <Link to={"/"}>Terms of Service</Link>.
                        </span>
                    </p>
                </div>
            </form>
        </main>
    );
};

export default Login;
