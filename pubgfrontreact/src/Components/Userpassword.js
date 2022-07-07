import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Home } from './Home'

export default function Userpassword() {
    const [value, setValues] = useState([]);
    const [update, setUpdate] = useState("");
    const [conform, setConform] = useState(false);
    const [info, setInfo] = useState("");
    const [sure, setSure] = useState(false)

    const details = () => {
        axios.get("http://localhost:8083/userservice/").then((res) => { setValues(res.data) });
    }

    useEffect(() => { details(); }, []);
    return (
        <div>
            <Home />
            {conform ?
                <div className="Popup">
                    <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to update your password ?</h3>
                    <div className="option">

                        <a className="btn btnm yes btn-success" onClick={() => {
                            if (conform == true) {
                                value.map((e) => {
                                    if (e.password == update) {
                                        setInfo("The old and new password not to be same!");
                                    } else {
                                        axios.put("http://localhost:8083/userservice/", {
                                            "userEmail": e.userEmail,
                                            "userName": e.userName,
                                            "mobileNumber": e.mobileNumber,
                                            "password": update
                                        }).then((res) => {
                                            return(setInfo(res.data))
                                        })
                                    }
                                });
                                details();
                                return (setConform(false),setSure(true), details())
                            }
                        }}>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg></a>
                        <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => { setConform(false) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg></a>
                    </div>
                </div> : ""}

                {sure ?
                <div className="Popup">
                    <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>{info}</h3>
                    <div className="option">
                        <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return(setSure(false),setInfo(""),details() )}}>OK </a>
                    </div>
                </div> : ""}

            <div className='account'>
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ textAlign: "center", color: "greenyellow" }}>Password edit</h3>
                </div>
                {
                    value.map((e) => {
                        return (
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Old Password</label>
                                <input class="form-control" type="text" placeholder={e.password} aria-label="Disabled input example" disabled /><br />
                                <label for="exampleFormControlInput1" class="form-label">New Password</label>
                                <input type="email" onChange={(e) => { setUpdate(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="Change here" /><br></br>
                                <button type="button" onClick={() => { return (setConform(true)) }} class="btn btn-success"> Update</button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
