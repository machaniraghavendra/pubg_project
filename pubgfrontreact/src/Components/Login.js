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
                    { localStorage.setItem("Raghu", "raghu") };
                    if (localStorage.getItem("Raghu")) {
                        nav("/pubg");
                    }
                }
            })
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
        <div className="container-lg" >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <img className="img-fluid navbar-brand logo flow" style={{ width: "auto", display: "flex", zIndex: "10" }} src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" />
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button><br></br><br></br><br></br>
                    <div className="collapse gap-2 navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/signup" role="button"><button className="btn flow btn-primary me-md-4">Sign Up</button></Link>
                            </li><br></br>
                            <li class="nav-item">
                                <Link to="/" role="button"><button className="btn flow btn-primary ">Home</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container formani">
                <form onSubmit={handleSubmit}>
                    <h1>Sign-in</h1><br></br>
                    <div className="ui divider">
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                            <div className="ui message success" style={{ color: "red" }}>Invalid Credentials</div>
                        ) : null}
                    </div>
                    <div className="ui form">
                        <div className="field form-floating mb-3">
                            <input
                                id="form3Example1  floatingInput" className="form-control"
                                type="text"
                                name="userEmail"
                                placeholder="Email"
                                value={formValues.userEmail}
                                onChange={handleChange}
                            />
                            <label className="form-label"
                                for="form3Example3 floatingInput" style={{ color: "black" }}>Email</label>
                        </div>
                        <p className="loginerror">{formErrors.userEmail}</p>
                        <div className="field form-floating mb-3">
                            <input
                                id="form3Example2 floatingInput" className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <label className="form-label"
                                for="form3Example3 floatingInput" style={{ color: "black" }}>Password</label>
                        </div>
                        <p className="loginerror">{formErrors.password}</p>
                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="https://www.facebook.com/login/" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="https://twitter.com/i/flow/login" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div><br></br>

                        <span>Don't have account? </span><Link to="/signup" style={{ textDecoration: "none", color: "yellow" }}> Sign up here </Link>
                        <button className="btn btnms button btn-success" onClick={localStorage.getItem("Raghu")}>Login</button>
                    </div>
                </form>
            </div>
            <div className="container-fluid bubble">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Login;