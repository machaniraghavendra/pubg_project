import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";
function SignUp() {

    const [formValues, setFormValues] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState();
    const [val, setVal] = useState("");
    const [conform, setConform] = useState(false);
    const login = () => {
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
            axios.post("http://localhost:8083/userservice/", formValues).then(res => { setVal(res.data); });
            axios.post("http://localhost:8088/sendmail", {
                "recipient": formValues.userEmail,
                "msgBody": "Welcome to PUBG website, \n\n Thank you for joining and getting signUp.\n\n Click here for to login : http://localhost:3000/login",
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
    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('actives');
    }
    return (
        <div className="container-lg">
            {
                conform ?
                    <div className="Popup-start">
                        {
                            val == "" ?
                                <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Wait a moment or fileds are required</h3>
                                :
                                <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>{val}</h3>}
                        <div className="option">
                            <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return (setConform(false), toggle()) }}>OK </a>
                        </div>
                    </div> : ""
            }
            <div className=" " id="blur">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <img className="img-fluid navbar-brand logo flow" style={{ width: "auto", display: "flex", zIndex: "10" }} src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" />
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button><br></br><br></br><br></br>
                        <div className="collapse gap-2 navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/login" role="button"><button className="btn flow btn-primary me-md-4">Sign in</button></Link>
                                </li><br></br>
                                <li class="nav-item">
                                    <Link to="/" role="button"><button className="btn flow btn-primary me-md-2">Home</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container container-xxl formani margin-top">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign-up</h1><br></br>
                        <div className="ui divider"></div>
                        <div class="form-floating mb-3">
                            <input
                                id="form3Example1 floatingInput " className="form-control"
                                type="text"
                                name="userName"
                                placeholder="Username"
                                value={formValues.userName}
                                onChange={handleChange}
                            />
                            <label for="floatingInput" style={{ color: "black" }}>Username</label>
                        </div>
                        <p className="loginerror">{formErrors.userName}</p>
                        <div class="form-floating mb-3">
                            <input
                                id="form3Example2" className="form-control"
                                type="text"
                                name="userEmail"
                                placeholder="Email"
                                value={formValues.userEmail}
                                onChange={handleChange}
                            />
                            <label for="floatingInput" style={{ color: "black" }}>Email</label>
                        </div>
                        <p className="loginerror">{formErrors.userEmail}</p>
                        <div class="form-floating mb-3">
                            <input
                                id="form3Example3 floatingInput" className="form-control"
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                            />
                            <label for="floatingInput" style={{ color: "black" }}>Mobile number</label>
                        </div>
                        <p className="loginerror">{formErrors.mobileNumber}</p>
                        <div class="form-floating mb-3">
                            <input
                                id="form3Example4" className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <label for="floatingInput" style={{ color: "black" }}>Password</label>
                        </div>
                        <p className="loginerror">{formErrors.password}</p>
                        < div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="https://www.facebook.com/login/" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="https://twitter.com/i/flow/login" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>
                        <span>Already have an account? </span><Link to="/login" style={{ textDecoration: "none", color: "yellow" }}> Sign in here </Link>
                        <button onClick={() => {
                            return (check(), setConform(true), toggle())
                        }} className="btn btnms  button btn-success">Submit</button>
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
        </div >
    );
}

export default SignUp;