import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";

export function ErrorPage(){
    return(
        <div >
            <img className="errordiv" src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/new/not-found/404-comp.png"/>
            <h2 className="error">404 - Page Not found :-(</h2>
            <h1 className="info">Didn't logged in yet ?<Link to="/login"> Tap here</Link></h1>
        </div>
    )
}