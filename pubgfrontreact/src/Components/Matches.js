import axios from "axios";
import { useState } from "react";
import { Home } from "./Home";

export function Matches() {

    const [matchlist, setMatchlist] = useState([]);

    const [viewmatchs, setViewmatches] = useState(true);

    const [conform, setConform] = useState(false)

    const [forFav, setForFav] = useState("");

    const [info, setInfo] = useState("");

    const [sure, setSure] = useState(false)

    const getMatches = () => {
        axios.get("http://localhost:8082/matcheslist/")
            .then((response) => { setMatchlist(response.data) });
    }

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('actives');
    }

    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                {conform ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to remove from favourites ?</h3>
                        <div className="option">
                            <a className="btn btnm yes btn-success" onClick={() => { return (setConform(false), toggle()) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg></a>
                            <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => {
                                if (conform == true) {
                                    axios.delete("http://localhost:8084/favouritematches/" + forFav).then((res) => { return (setInfo(res.data), toggle()) });
                                    return (setConform(false), setSure(true), toggle())
                                }
                            }}>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg></a>
                        </div>
                    </div> : ""}


                {sure ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>{info}</h3>
                        <div className="option">
                            <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return (setSure(false), setInfo("")), toggle() }}>OK </a>
                        </div>
                    </div> : ""}

                <div className="" id="blur">
                    <Home />
                    <div className="container-xxl margin-top">
                        <h1 className="title">Matches</h1>
                        <div className="slides">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://wallpapercave.com/wp/wp2516033.jpg" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://wallpaperaccess.com/full/407341.jpg" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.theindianwire.com/wp-content/uploads/2019/02/pubggg.jpg" class="d-block w-100" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="row1 ">
                            <div  >
                                <h1 className="row2">
                                    <img id="gun" src="https://i.pinimg.com/originals/44/14/da/4414da602eb1750d5c2f7b2f86c371ef.png" />
                                    PUBG Matches
                                    <img id="gun" src="https://i.pinimg.com/736x/81/df/e4/81dfe412fe447489a3aef1fca02c6157.jpg" />
                                    {
                                        viewmatchs ? (
                                            <button type="button" className="btn view btn-warning" onClick={() => {
                                                setViewmatches(false);
                                                getMatches();
                                            }}>View Matches</button>
                                        ) : (
                                            <button type="button" className="btn view btn-warning" onClick={() => {
                                                setViewmatches(true);
                                                setMatchlist([]);
                                            }}>Hide Matches</button>
                                        )
                                    }
                                </h1>
                                <div className="col-4" >
                                    <div className="list-group" id="list-tab" role="tablist" >
                                        <a className="list-group-item list-group-itemm list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Clasic</a>
                                        <a className="list-group-item list-group-itemm list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Battle-Royle</a>
                                        <a className="list-group-item list-group-itemm list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Clash-Squad Ranked</a>
                                        <a className="list-group-item list-group-itemm list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Clash-Squad</a>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="tab-content" id="nav-tabContent">
                                        {matchlist.length == [] ? <h2 className="fadem" style={{ color: "white" }}>No Matches found !<br /><br /><br /><br /><br /><br /></h2> : ""}
                                        <div className="tab-pane fadem fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                            {
                                                matchlist.map((value) => {
                                                    if (value.matchId == "PGk1") {
                                                        return (
                                                            <div>
                                                                <table style={{ width: "100%" }} class="table">
                                                                    <thead class="table-dark">
                                                                        <tr>
                                                                            <th scope="col">MatchId</th>
                                                                            <th scope="col">Match_Name</th>
                                                                            <th scope="col">Match_Type</th>
                                                                            <th scope="col">Total_Players</th>
                                                                            <th scope="col">Match_Time/min</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr key={value.matchId}>
                                                                            <th scope="row">{value.matchId}</th>
                                                                            <td>{value.matchName}</td>
                                                                            <td>{value.matchType}</td>
                                                                            <td>{value.playersCount}</td>
                                                                            <td>{value.matchTime}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <img style={{ width: "150%", marginLeft: "40px", border: "3px yellow solid" }} src="https://www.fajaryusuf.com/wp-content/uploads/2020/07/fajaryusuf.com-pubg-mobile-unranked-classic-1200x675.jpg" />
                                                                <br></br> <br></br>
                                                                <div id="button" className="d-grid gap-1 d-md-flex justify-content-md-end">
                                                                    <button type="button " className="btn btnm1 btn-success  btn-primary me-md-2" onClick={() => {
                                                                        axios.post("http://localhost:8084/favouritematches/", {
                                                                            "favouriteId": "F1",
                                                                            "matchId": value.matchId,
                                                                            "matchName": value.matchName,
                                                                            "matchType": value.matchType,
                                                                            "playersCount": value.playersCount,
                                                                            "matchTime": value.matchTime
                                                                        }, []).then((res => { return (setInfo(res.data)) }))
                                                                        setSure(true);
                                                                        toggle();
                                                                    }}>Add to Favourites</button>
                                                                    <button type="button" onClick={() => {
                                                                        setConform(true);
                                                                        setForFav("F1");
                                                                        toggle();
                                                                    }} class="btn btnm1 btn-danger  btn-primary me-md-4">Remove</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                        </div>
                                        <div className="tab-pane fadem fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                            {
                                                matchlist.map((value) => {
                                                    if (value.matchId == "PGk2") {
                                                        return (
                                                            <div>
                                                                <table style={{ width: "100%" }} className="table">
                                                                    <thead className="table-dark">
                                                                        <tr>
                                                                            <th scope="col">MatchId</th>
                                                                            <th scope="col">Match_Name</th>
                                                                            <th scope="col">Match_Type</th>
                                                                            <th scope="col">Total_Players</th>
                                                                            <th scope="col">Match_Time/min</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr key={value.matchId}>
                                                                            <th scope="row">{value.matchId}</th>
                                                                            <td>{value.matchName}</td>
                                                                            <td>{value.matchType}</td>
                                                                            <td>{value.playersCount}</td>
                                                                            <td>{value.matchTime}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <img style={{ width: "150%", marginLeft: "40px", border: "3px yellow solid" }} src="https://staticg.sportskeeda.com/editor/2020/06/68c7e-15935051044819-800.jpg" />
                                                                <br></br> <br></br>
                                                                <div id="button" className="d-grid gap-1 d-md-flex justify-content-md-end">
                                                                    <button type="button" className="btn btnm1 btn-success  btn-primary me-md-2" onClick={() => {
                                                                        axios.post("http://localhost:8084/favouritematches/", {
                                                                            "favouriteId": "F2",
                                                                            "matchId": value.matchId,
                                                                            "matchName": value.matchName,
                                                                            "matchType": value.matchType,
                                                                            "playersCount": value.playersCount,
                                                                            "matchTime": value.matchTime

                                                                        }, []).then(res => { return (setInfo(res.data)) })
                                                                        setSure(true);
                                                                        toggle();
                                                                    }}>Add to Favourites</button>
                                                                    <button type="button"
                                                                        onClick={() => {
                                                                            setConform(true);
                                                                            setForFav("F2");
                                                                            toggle();
                                                                        }} class="btn btnm1 btn-danger">Remove</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                        </div>
                                        <div class="tab-pane fadem  fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                            {
                                                matchlist.map((value) => {
                                                    if (value.matchId == "PGk3") {
                                                        return (
                                                            <div>
                                                                <table style={{ width: "100%" }} className="table">
                                                                    <thead class="table-dark">
                                                                        <tr>
                                                                            <th scope="col">MatchId</th>
                                                                            <th scope="col">Match_Name</th>
                                                                            <th scope="col">Match_Type</th>
                                                                            <th scope="col">Total_Players</th>
                                                                            <th scope="col">Match_Time/min</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr key={value.matchId}>
                                                                            <th scope="row">{value.matchId}</th>
                                                                            <td>{value.matchName}</td>
                                                                            <td>{value.matchType}</td>
                                                                            <td>{value.playersCount}</td>
                                                                            <td>{value.matchTime}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <img style={{ width: "150%", marginLeft: "40px", border: "3px yellow solid" }} src="https://staticg.sportskeeda.com/editor/2019/09/76a95-15676211848083-800.jpg" />
                                                                <br></br> <br></br>
                                                                <div id="button" className="d-grid gap-1 d-md-flex justify-content-md-end">
                                                                    <button type="button" className="btn btnm1 btn-success  btn-primary me-md-4" onClick={(e) => {
                                                                        axios.post("http://localhost:8084/favouritematches/", {
                                                                            "favouriteId": "F3",
                                                                            "matchId": value.matchId,
                                                                            "matchName": value.matchName,
                                                                            "matchType": value.matchType,
                                                                            "playersCount": value.playersCount,
                                                                            "matchTime": value.matchTime

                                                                        }, []).then(res => { return (setInfo(res.data)) })
                                                                        setSure(true);
                                                                        toggle();
                                                                    }}>Add to Favourites</button>
                                                                    <button type="button" onClick={() => {
                                                                        setConform(true);
                                                                        setForFav("F3");
                                                                        toggle();
                                                                    }} class="btn btnm1 btn-danger">Remove</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                        </div>
                                        <div class="tab-pane fadem fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                            {
                                                matchlist.map((value) => {
                                                    if (value.matchId == "PGk4") {
                                                        return (
                                                            <div>
                                                                <table style={{ width: "100%" }} class="table">
                                                                    <thead className="table-dark">
                                                                        <tr>
                                                                            <th scope="col">MatchId</th>
                                                                            <th scope="col">Match_Name</th>
                                                                            <th scope="col">Match_Type</th>
                                                                            <th scope="col">Total_Players</th>
                                                                            <th scope="col">Match_Time/min</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr key={value.matchId}>
                                                                            <th scope="row">{value.matchId}</th>
                                                                            <td>{value.matchName}</td>
                                                                            <td>{value.matchType}</td>
                                                                            <td>{value.playersCount}</td>
                                                                            <td>{value.matchTime}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <img style={{ width: "150%", marginLeft: "40px", border: "3px yellow solid" }} src="https://cdn1.dotesports.com/wp-content/uploads/2021/07/09084634/wp7247300.jpg" />
                                                                <br></br> <br></br>
                                                                <div id="button" className="d-grid gap-1 d-md-flex justify-content-md-end">
                                                                    <button type="button" className="btn btnm1 btn-success  btn-primary me-md-4" onClick={(e) => {
                                                                        axios.post("http://localhost:8084/favouritematches/", {
                                                                            "favouriteId": "F4",
                                                                            "matchId": value.matchId,
                                                                            "matchName": value.matchName,
                                                                            "matchType": value.matchType,
                                                                            "playersCount": value.playersCount,
                                                                            "matchTime": value.matchTime
                                                                        }, []).then(res => { return (setInfo(res.data)) })
                                                                        setSure(true);
                                                                        toggle();
                                                                    }}>Add to Favourites</button>
                                                                    <button type="button" onClick={() => {
                                                                        setConform(true);
                                                                        setForFav("F4");
                                                                        toggle();
                                                                    }} class="btn btnm1 btn-danger">Remove</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br>
                            <div className="card text-bg-dark mb-3 back" style={{ position: "relative" }}>
                                <div className="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Matches</h5>
                                    <br></br>
                                    <p id="data">© 2021 KRAFTON, INC.
                                        PUBG IS A REGISTERED TRADEMARK OR SERVICE MARK OF KRAFTON, INC.

                                        PARTNERSHIP INQUIRY: PUBG_INQUIRY@PUBG.COM</p>
                                    <br></br><br></br><br></br>
                                    <div className="cond">
                                        <a href="#" className="card-text">Privacy policy</a>
                                        <a href="#" className="card-text">Terms & services</a>
                                        <a href="#" className="card-text">Rules of conduct</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card back">
                                <div className="card-body">
                                    <a href="#" className="btn down btn-primary">^</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}