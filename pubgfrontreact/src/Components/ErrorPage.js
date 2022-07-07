import React from "react";
import "../App.css";
import { Home } from "./Home";

export function ErrorPage(){
    return(
        <div >
            <Home/>
            <img className="errordiv" src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/new/not-found/404-comp.png"/>
            <h2 className="error">404 - Page Not found :-(</h2>
        </div>
    )
}