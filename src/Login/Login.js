import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_url = location.state?.from || '/home';
    // const handleGoogleLogIn = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_url)
    //         })
    // }
    return (
        <div>
            {/* <h2>Please login</h2>
            <Button onClick={signInUsingGoogle} variant="primary">Sign In By Google</Button> */}
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Yout password" />
                    <br /><br />
                    <input onClick={signInUsingGoogle} type="submit" value="Submit" className="btn btn-primary" />
                    <br /><br />
                </form>
                <p>New in here ? <Link to="/register">Create your account</Link></p>
                <div>-----------or-----------</div>
                <Button onClick={signInUsingGoogle} className="btn-primary"><i class="fab fa-google"></i></Button>
            </div>
        </div>
        
    );
};

export default Login;