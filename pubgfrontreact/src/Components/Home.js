import "../App.css";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export function Home() {

    const [conform, setConform] = useState(false);

    const [value, setValues] = useState([]);

    const [store, setStore] = useState(null);

    const details = () => {
        axios.get("http://localhost:8083/userservice/").then((res) => { setValues(res.data) });
    }

    const nav = useNavigate();

    useEffect(() => { details(); setStore(localStorage.getItem("profile")) }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div className="" id="blur">
                <div className="card homecard text-center">
                    <div className="card-header">
                        {conform ?
                            <div className="Popup">
                                <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to Logout ?</h3>
                                <div className="option">
                                    <a className="btn btnm yes btn-success" onClick={() => {
                                        return (setConform(false))
                                    }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                        </svg></a>

                                    <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => {
                                        if (conform == true) {
                                            localStorage.removeItem("Raghu", "raghu");
                                            nav("/")
                                            return (setConform(false))
                                        }
                                    }}>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                        </svg></a>
                                </div>
                            </div> : ""}
                        <Link to="/pubg"><img className="logo" src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></Link>
                        <ul className="nav">
                            <li Class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/tournaments">Tournaments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/characters">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/matches">Matches</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favourites">Favourite List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recommended">Recommendation</Link>
                            </li>
                            <span className="nav-item">
                                {value.map((e) => {
                                    return (
                                        <Link className="nav-link" to="/account">
                                            {
                                                localStorage.getItem("profile") == null ? <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg> :
                                                    <img className="sizeprofile" src={localStorage.getItem("profile")}/>
                                            }{e.userName}</Link>
                                    )

                                })}
                            </span>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => { return (setConform(true)) }} style={{ backgroundColor: "red" }} to="">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}