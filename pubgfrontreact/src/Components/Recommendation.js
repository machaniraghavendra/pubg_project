import "../App.css";
import { Home } from "./Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
export function Recommendation()
{   
    const[list,setList]=useState([]);
    const getCharacters=()=>{
        axios.get("http://localhost:8085/playerslist/").then((response)=>{setList(response.data)});
    }
    useEffect(()=>{getCharacters();},[]);
    return(
        <div >
            <Home/>
            <h1 className="title">Recommendation</h1>
            <div>
            <h3 className="sentence">Here comes the most recommended Characters which most of the players are used to play....</h3>
                <div className="rback">
                    <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/pubg--228419855f3339b62879b3cd3147cab1.jpg" class="img-fluid src" alt="..."></img>
                </div>
                <div className="back" >
                    {
                        list.map((value)=>{
                            if (value.id=="1") {
                                return(
                                    <div>
                                        <img className="char" src="https://wallpaperaccess.com/full/3747379.png"></img>
                                        <div className="detailsdata">
                                            <h3 className="details">ID : {value.id}</h3>
                                            <h3 className="details">Name : {value.name}</h3>
                                            <h3 className="details">Skill : {value.skill}</h3>
                                            <h3 className="details">Strength : {value.strength}</h3>
                                            <h3 className="details">Amount : {value.amount}</h3>
                                        </div>
                                    </div>
                        )
                        }})
                    }
                </div>
                <div className="back" >
                    {
                        list.map((value)=>{
                            if (value.id=="4") {
                                return(
                                        <div>
                                            <img className="char3" src="https://wallpaperaccess.com/full/3747439.png"/>
                                            <div className="detailsdata3">
                                                <h3 className="details">ID : {value.id}</h3>
                                                <h3 className="details">Name : {value.name}</h3>
                                                <h3 className="details">Skill : {value.skill}</h3>
                                                <h3 className="details">Strength : {value.strength}</h3>
                                                <h3 className="details">Amount : {value.amount}</h3>
                                            </div>
                                        </div>
                                    )
                                }})
                    }
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br>
                <div class="card text-bg-dark mb-3 back" >
                    <div class="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png"/></div>
                    <div class="card-body">
                        <h5 class="card-title">Recommended Characters</h5>
                        <br></br>
                        <p id="data">© 2021 KRAFTON, INC.
                            PUBG IS A REGISTERED TRADEMARK OR SERVICE MARK OF KRAFTON, INC.

                            PARTNERSHIP INQUIRY: PUBG_INQUIRY@PUBG.COM</p>
                            <br></br><br></br><br></br>
                        <div className="cond">
                            <a href="#" class="card-text">Privacy policy</a>
                            <a href="#" class="card-text">Terms & services</a>
                            <a href="#" class="card-text">Rules of conduct</a>
                        </div>
                    </div>
                </div>
                <div className="card back">
                    <div class="card-body">
                        <a href="#" class="btn down btn-primary">^</a>
                    </div>
                </div>
            </div>
        </div>
    )
}