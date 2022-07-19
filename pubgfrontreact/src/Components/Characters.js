import "../App.css";
import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import axios from "axios";
export function Characters() {
    const [list, setList] = useState([]);
    const getCharacters = () => {
        axios.get("http://localhost:8085/playerslist/").then((response) => { setList(response.data) });
    }
    useEffect(() => { getCharacters(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                <Home />
                <h1 className="title">Characters -|</h1>
                <img style={{ marginLeft: "-9%", height: "70%", width: "70%" }} src="https://media.istockphoto.com/photos/gun-fire-picture-id506430662?b=1&k=20&m=506430662&s=170667a&w=0&h=nuSFZBqDRhCuv7PJQusfbnnDb2s6m-JbFIHPj6dfHbs=" />
                <div className="back" style={{ backgroundColor: "black" }}>
                    <div className="back" >
                        {
                            list.map((value) => {
                                if (value.id == "1") {
                                    return (
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
                                }
                            })
                        }
                    </div>
                    <div className="back" >
                        {
                            list.map((value) => {
                                if (value.id == "3") {
                                    return (
                                        <div>
                                            <img className="char1" src="https://www.pngmart.com/files/10/PUBG-Character-PNG-Free-Download.png" />
                                            <div className="detailsdata1">
                                                <h3 className="details">ID : {value.id}</h3>
                                                <h3 className="details">Name : {value.name}</h3>
                                                <h3 className="details">Skill : {value.skill}</h3>
                                                <h3 className="details">Strength : {value.strength}</h3>
                                                <h3 className="details">Amount : {value.amount}</h3>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="back" >
                        {
                            list.map((value) => {
                                if (value.id == "2") {
                                    return (
                                        <div>
                                            <img className="char2" src="https://wallpaperaccess.com/full/3747431.png" />
                                            <div className="detailsdata2">
                                                <h3 className="details">ID : {value.id}</h3>
                                                <h3 className="details">Name : {value.name}</h3>
                                                <h3 className="details">Skill : {value.skill}</h3>
                                                <h3 className="details">Strength : {value.strength}</h3>
                                                <h3 className="details">Amount : {value.amount}</h3>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="back" >
                        {
                            list.map((value) => {
                                if (value.id == "4") {
                                    return (
                                        <div>
                                            <img className="char3" src="https://wallpaperaccess.com/full/3747439.png" />
                                            <div className="detailsdata3">
                                                <h3 className="details">ID : {value.id}</h3>
                                                <h3 className="details">Name : {value.name}</h3>
                                                <h3 className="details">Skill : {value.skill}</h3>
                                                <h3 className="details">Strength : {value.strength}</h3>
                                                <h3 className="details">Amount : {value.amount}</h3>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="back" >
                        {
                            list.map((value) => {
                                if (value.id == "5") {
                                    return (
                                        <div>
                                            <img className="char4" src="https://i.pinimg.com/originals/af/3c/ff/af3cff56f7c8e5019805ecb9c337dbb4.jpg" />
                                            <div className="detailsdata4">
                                                <h3 className="details">ID : {value.id}</h3>
                                                <h3 className="details">Name : {value.name}</h3>
                                                <h3 className="details">Skill : {value.skill}</h3>
                                                <h3 className="details">Strength : {value.strength}</h3>
                                                <h3 className="details">Amount : {value.amount}</h3>
                                            </div>

                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h1 className="title">Details Power pack:-</h1>
                    <div className="flex">
                        <div class="card char-cards mb-3">
                            {
                                list.map((value) => {
                                    if (value.id == "1") {
                                        return (
                                            <div>
                                                <img src="https://wallpaperaccess.com/full/3747379.png" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h3 className="details">ID : {value.id}</h3>
                                                    <h3 className="details">Name : {value.name}</h3>
                                                    <h3 className="details">Skill : {value.skill}</h3>
                                                    <h3 className="details">Strength : {value.strength}</h3>
                                                    <h3 className="details">Amount : {value.amount}</h3>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div class="card char-cards mb-3">
                            {
                                list.map((value) => {
                                    if (value.id == "2") {
                                        return (
                                            <div>
                                                <img src="https://wallpaperaccess.com/full/3747431.png" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h3 className="details">ID : {value.id}</h3>
                                                    <h3 className="details">Name : {value.name}</h3>
                                                    <h3 className="details">Skill : {value.skill}</h3>
                                                    <h3 className="details">Strength : {value.strength}</h3>
                                                    <h3 className="details">Amount : {value.amount}</h3>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div class="card char-cards mb-3">
                            {
                                list.map((value) => {
                                    if (value.id == "3") {
                                        return (
                                            <div>
                                                <img style={{ width: "70%" }} src="https://www.pngmart.com/files/10/PUBG-Character-PNG-Free-Download.png" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h3 className="details">ID : {value.id}</h3>
                                                    <h3 className="details">Name : {value.name}</h3>
                                                    <h3 className="details">Skill : {value.skill}</h3>
                                                    <h3 className="details">Strength : {value.strength}</h3>
                                                    <h3 className="details">Amount : {value.amount}</h3>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>

                        <div class="card char-cards mb-3">
                            {
                                list.map((value) => {
                                    if (value.id == "4") {
                                        return (
                                            <div>
                                                <img style={{ width: "110%" }} src="https://wallpaperaccess.com/full/3747439.png" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h3 className="details">ID : {value.id}</h3>
                                                    <h3 className="details">Name : {value.name}</h3>
                                                    <h3 className="details">Skill : {value.skill}</h3>
                                                    <h3 className="details">Strength : {value.strength}</h3>
                                                    <h3 className="details">Amount : {value.amount}</h3>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div class="card char-cards mb-3">
                            {
                                list.map((value) => {
                                    if (value.id == "5") {
                                        return (
                                            <div>
                                                <img src="https://i.pinimg.com/originals/af/3c/ff/af3cff56f7c8e5019805ecb9c337dbb4.jpg" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h3 className="details">ID : {value.id}</h3>
                                                    <h3 className="details">Name : {value.name}</h3>
                                                    <h3 className="details">Skill : {value.skill}</h3>
                                                    <h3 className="details">Strength : {value.strength}</h3>
                                                    <h3 className="details">Amount : {value.amount}</h3>

                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <img id="weapons" src="https://wallpaperaccess.com/full/3747421.png" />
                    <div class="card text-bg-dark mb-3 back" >
                        <div class="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></div>
                        <div class="card-body">
                            <h5 class="card-title">Characters</h5>
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
}