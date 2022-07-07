import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
function Login() {

    const [formValues, setFormValues] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const nav = useNavigate();
    const check = () => {
        axios.get("http://localhost:8083/userservice/" + formValues.userEmail + "/" + formValues.password)
            .then((res) => {
                setFormValues(res);
                if (res.data == true) {
                    nav("/pubg")
                }
            }).catch(

                nav("/login")
            );
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

    useEffect(() => {
        check()
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.userEmail) {
            errors.userEmail = "Email is required!";
        } else if (!regex.test(values.userEmail)) {
            errors.userEmail = "This is not a valid email format!";
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
        <div>
            <img className="logo flow" src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" />
            <Link className="btn buttons flow btn-primary" to="/signup" role="button">Sign up</Link>
            <Link className="btn buttons flow btn-primary" to="/" role="button">Home</Link>
            <div className="container formani">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success" style={{ color: "red" }}>Invalid Credentials</div>
                ) : null}

                <form onSubmit={handleSubmit}>
                    <h1>Sign-in</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label className="form-label"
                                for="form3Example3">Email</label>
                            <input
                                id="form3Example1" className="form-control"
                                type="text"
                                name="userEmail"
                                placeholder="Email"
                                value={formValues.userEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.userEmail}</p>
                        <div className="field">
                            <label className="form-label"
                                for="form3Example3">Password</label>
                            <input
                                id="form3Example2" className="form-control"
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
                            <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                        </div><br></br>

                        <span>Don't have account? </span><Link to="/signup" style={{ textDecoration: "none", color: "yellow" }}> Sign up here </Link>
                        <button className="btn btnms button btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;