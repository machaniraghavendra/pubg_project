import React, { useEffect, useState } from 'react'
import { Home } from "./Home";
import { Link } from "react-router-dom";
import axios from 'axios';

function Account() {

    const [value, setValues] = useState([]);

    const details = () => {
        axios.get("http://localhost:8083/userservice/").then((res) => { setValues(res.data) });
    }
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
   
    const handlepic = (e) => {
        const select = e.target.files[0];
        const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
        if (select && allowedTypes.includes(select.type)) {
            let read = new FileReader();
            read.onloadend = () => {
                setImgPreview(select);
            }
            read.readAsDataURL(select);
        } else {
            setError(true);
        }
    }
    useEffect(() => { details(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                <Home />
                <div className='account'>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ textAlign: "center", color: "greenyellow" }}>Account Details</h3>
                    </div><br></br>
                    {
                        value.map((e) => {
                            return (
                                <div>
                                    <Link to="/update/profilepic">
                                        {localStorage.getItem("profile")==null?<svg xmlns="http://www.w3.org/2000/svg" width="15%" height="25%" fill="currentColor" className="bi bi-person-circle bi-person-circle1 " viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>:
                                        <img className="image"src={localStorage.getItem("profile")}/>
                                        }
                                    </Link>

                                    <div className="mb-3 row">
                                        <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" style={{ width: "50%" }} type="text" placeholder={e.userName} aria-label="Disabled input example" disabled /><br />
                                            <Link to="/update/username"><button type="button" className="btn btn-info"> Update Username</button></Link><br />
                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" style={{ width: "50%" }} type="text" placeholder={e.userEmail} aria-label="Disabled input example" disabled readonly /><br />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Mobile-No</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" style={{ width: "50%" }} type="text" placeholder={e.mobileNumber} aria-label="Disabled input example" disabled readonly /><br />
                                            <Link to="/update/usermobile"><button type="button" className="btn btn-info">Update Mobile-No</button></Link><br />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <Link to="/update/userpassword"><button type="button" className="btn btn-info">Update Password</button></Link><br />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}
export default Account;