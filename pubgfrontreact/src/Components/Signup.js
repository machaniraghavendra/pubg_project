import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";
function SignUp() {

    const [formValues, setFormValues] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState();

    const login = () => {
        axios.post("http://localhost:8083/userservice/", formValues).then(res => { alert(res.data) });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const check = () => {
        if (isSubmit === true) {
            axios.post("http://localhost:8088/sendmail", {
                "recipient": formValues.userEmail,
                "msgBody": "Welcome to PUBG website, \n\n Thank you for joining and getting signUp.",
                "subject": "PUBG Welcomes You " + formValues.userName
            }).then(res => (alert(res.data)), login())
        }
        else {
            <h1>Something missing or error while signup</h1>
        }
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex1 = /^[0-9]+$/;
        if (!values.userName) {
            errors.userName = "Username is required!";
        }
        if (!values.userEmail) {
            errors.userEmail = "Email is required!";
        } else if (!regex.test(values.userEmail)) {
            errors.userEmail = "This is not a valid email format!";
        }
        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile number Required !";
        } else if (values.mobileNumber.length > 10 || values.mobileNumber.length < 10) {
            errors.mobileNumber = "Mobile Number should be 10 digits"
        }
        else if (!regex1.test(values.mobileNumber)) {
            errors.mobileNumber = "Enter valid mobile number !"
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <div >
            <img className="logo flow" src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" />
            <Link className="btn buttons flow btn-primary" to="/login" role="button">Sign in</Link>
            <Link className="btn buttons flow btn-primary" to="/" role="button">Home</Link>
            <div className="container formani">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">Signed up successfully</div>
                ) : null}
               
                <form onSubmit={handleSubmit}>
                    <h1>Sign-up</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                id="form3Example1" className="form-control"
                                type="text"
                                name="userName"
                                placeholder="Username"
                                value={formValues.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.userName}</p>
                        <div className="field">
                            <label>Email</label>
                            <input
                                id="form3Example2" className="form-control"
                                type="text"
                                name="userEmail"
                                placeholder="Email"
                                value={formValues.userEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.userEmail}</p>
                        <div className="field">
                            <label>Mobile No</label>
                            <input
                                id="form3Example3" className="form-control"
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.mobileNumber}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                id="form3Example4" className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.password}</p>
                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="https://www.facebook.com/login/" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="https://twitter.com/i/flow/login" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>
                        <span>Already have an account? </span><Link to="/login" style={{ textDecoration: "none", color: "yellow" }}> Sign in here </Link>
                        <button onClick={check} className="btn btnms  button btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;