import React from 'react';
import './login.scss'

Login.propTypes = {

};

function Login(props) {
    return (
        <div>
            <body>
                <div class="login-clean">
                    <form method="post">
                        <div class="illustration"><i class="icon ion-ios-navigate"></i></div>
                        <div class="form-group"><input type="email" class="form-control" name="email" placeholder="Email" /></div>
                        <div class="form-group"><input type="password" class="form-control" name="password" placeholder="Password" /></div>
                        <div class="form-group"><button class="btn btn-login btn-block" type="submit">Login</button></div>
                        <a class="forgot" href="#">Forgot your email or password?</a>
                        <div class="form-group"><button class="btn btn-create btn-block" type="submit">Create new Account</button></div>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Login;