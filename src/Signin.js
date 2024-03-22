import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'; // Import your CSS file

function Signin() {
    return (
        <section className="section" >
            <div className="login-box">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </span>
                        <input type="email" required />
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />RememberMe</label>
                        <a href="#"> Forgot Password ?</a>
                    </div>
                    <button className="button" type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account?  <Link to="/SignUp">Register </Link> </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signin;
