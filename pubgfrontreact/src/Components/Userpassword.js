import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Home } from './Home'

export default function Userpassword() {
    const [value, setValues] = useState([]);
    const [update, setUpdate] = useState("");
    const [conform, setConform] = useState(false);
    const [info, setInfo] = useState("");
    const [sure, setSure] = useState(false);
    const [sure1, setSure1] = useState(false)
    const [result, setResult] = useState(false);
    const [checkupdate, setCheckUpdate] = useState("");

    const details = () => {
        axios.get("http://localhost:8083/userservice/").then((res) => { setValues(res.data) });
    }
    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('actives');
    }
    useEffect(() => { details(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                {result ?
                    conform ?
                        <div className="Popup">
                            <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to update your password ?</h3>
                            <div className="option">

                                <a className="btn btnm yes btn-success" onClick={() => {
                                    if (conform == true) {
                                        value.map((e) => {
                                            if (e.password == update) {
                                                setInfo("The old  and new password not to be same!");
                                            }
                                            else if (update != checkupdate) {
                                                return (setInfo("The new passwords not matched !"), toggle())
                                            }
                                            else {
                                                axios.put("http://localhost:8083/userservice/", {
                                                    "userEmail": e.userEmail,
                                                    "userName": e.userName,
                                                    "mobileNumber": e.mobileNumber,
                                                    "password": update
                                                }).then((res) => {
                                                    return (setInfo(res.data), toggle())
                                                })
                                            }
                                        });
                                        details();
                                        return (setConform(false), setSure(true), details(), toggle())
                                    }
                                }}>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg></a>
                                <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => { return (setConform(false), toggle()) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg></a>
                            </div>
                        </div> : ""
                    :
                    sure1 ?
                        <div className="Popup">
                            <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>The old password is not matched with given password</h3>
                            <div className="option">
                                <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return (setSure1(false), setInfo(""), details(), toggle()) }}>OK </a>
                            </div>
                        </div> : ""}
                {sure ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>{info}</h3>
                        <div className="option">
                            <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return (setSure(false), setInfo(""), details(), toggle()) }}>OK </a>
                        </div>
                    </div> : ""}

                <div className="" id="blur">
                    <Home />
                    <div className='account'>
                        <div style={{ textAlign: "center" }}>
                            <h3 style={{ textAlign: "center", color: "greenyellow" }}>Password edit</h3>
                        </div>
                        {
                            value.map((most) => {
                                return (
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Old Password</label>
                                        <input className="form-control" type="text" onChange={(e) => {
                                            axios.get("http://localhost:8083/userservice/pass/" + e.target.value + "/" + most.password).then((res) => { setResult(res.data) })

                                        }} placeholder="Type Old password here" /><br />
                                        <label for="exampleFormControlInput1" className="form-label">New Password</label>
                                        <input type="email" onChange={(e) => { setUpdate(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Change here" /><br></br>
                                        <label for="exampleFormControlInput1" className="form-label">Conform New Password</label>
                                        <input type="email" className="form-control" onChange={(e) => { setCheckUpdate(e.target.value) }} id="exampleFormControlInput1" placeholder="Re-Type New password here" /><br></br>
                                        <button type="button" onClick={() => { return (setConform(true)), setSure1(true), details(), toggle() }} className="btn btn-success"> Update</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}