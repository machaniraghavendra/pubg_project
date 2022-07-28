import React, { useEffect, useState } from 'react'
import { Home } from "./Home";
import { Link } from "react-router-dom";
import axios from 'axios';

function Account() {

    const [value, setValues] = useState([]);
    const [conform, setConform] = useState(false);
    const [sure, setSure] = useState(false)

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
    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('actives');
    }
    useEffect(() => { details(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                {conform ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" ,color:"red" }}>Do you want to delete account permanently ?</h3>
                        <div className="option">
                            <a className="btn btnm yes btn-success" onClick={() => { return (setConform(false), toggle()) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg></a>
                            <a className="btn btnm yes btn-danger" style={{ background: "red" }}
                             onClick={() => {
                                return (setConform(false), setSure(true))
                            }}>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg></a>
                        </div>
                    </div> : ""}

                {sure ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" ,color:"red"}}>Do you want to delete by sure and want to move to signup page ?</h3>
                        <div className="option">
                            <a href="http://localhost:3000/signup" className="btn btnm yes btn-danger" style={{float :"right", textAlign: "center" }} onClick={() => {
                                return (
                                    axios.delete("http://localhost:8083/userservice/" + value.map((e) => { return (e.userEmail) })).then((res) => { setValues(res.data) }),
                                    localStorage.removeItem("profile"), localStorage.removeItem("Raghu", "raghu"), setSure(false), toggle())
                            }}>Yes </a>
                            <a className="btn btnm yes btn-success" onClick={() => { return (setConform(false), setSure(false), toggle()) }}>No </a>
                        </div>
                    </div> : ""}
                <div className='.container-md' id="blur">
                    <Home />
                    <div className='account container-xxl margin-top'>
                        <div style={{ textAlign: "center" }}>
                            <h3 style={{ textAlign: "center", color: "greenyellow" }}>Account Details</h3>
                        </div><br></br>
                        {
                            value.map((e) => {
                                return (
                                    <div className="container-fluid must">
                                        <Link to="/update/profilepic">
                                            {localStorage.getItem("profile") == null ? <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="25%" fill="currentColor" className="bi bi-person-circle bi-person-circle1 " viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg> :
                                                <img className="image img-fluid" width="200" height="200" src={localStorage.getItem("profile")} />
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
                                            <label for="inputPassword" className="col-sm-2 col-form-label">Ph-No</label>
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
                        <div className="mb-3 row">
                        <div className="col-sm-10">
                                <button type="button" className="btn btn-danger" style={{marginLeft:"34%", background: "red" }} onClick={() => { return (setConform(true), toggle()) }}>Delete Account</button><br />
                            </div><br></br><br></br>
                            <p for="inputPassword" style={{ color: "red" }} className=""> !! Once deleted the account can't be retrived and all data will be lost !!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Account;