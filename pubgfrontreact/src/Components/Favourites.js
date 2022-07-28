import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import { Home } from "./Home";
export function Favourite() {

    var i = 1;

    const [flist, setFlist] = useState([]);

    const [conform, setConform] = useState(false)

    const [forFav, setForFav] = useState("");

    const [info, setInfo] = useState("");

    const [sure, setSure] = useState(false)

    const getFavourites = () => {
        axios.get("http://localhost:8084/favouritematches/")
            .then((response) => { setFlist(response.data) });
    }

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('actives');
    }

    useEffect(() => { getFavourites(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div>
                {conform ?
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to remove from favourites ?</h3>
                        <div className="option">
                            <a className="btn btnm yes btn-success" onClick={() => { return(setConform(false),toggle()) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg></a>
                            <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => {
                                if (conform == true) {
                                    axios.delete("http://localhost:8084/favouritematches/" + forFav).then((res) => { return (setInfo(res.data),toggle()) });
                                    return (getFavourites(), setConform(false), setSure(true),toggle())
                                }
                                getFavourites();
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
                            <a className="btn btn-info yes" style={{ marginLeft: "70%", textAlign: "center" }} onClick={() => { return (setSure(false), setInfo(""), getFavourites(),toggle()) }}>OK </a>
                        </div>
                    </div> : ""}
                <div className="" id="blur">
                    <Home />
                    <div className="container-xxl margin-top">
                        <h1 className="title">Favourites</h1>
                        <div className="carousel-item active">
                            <img src="https://www.tinyquip.com/wp-content/uploads/2018/07/imag1.jpg" className="d-block w-50 img-fluid src" />
                        </div>
                        <div className="row1 frow1 table-responsive table-total ">
                            {flist.length == [] ? <span><h2 className="" style={{ color: "white" }}>No Favourites found !</h2></span>
                                :
                                <table className="table-total table ftable">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">MatchId</th>
                                            <th scope="col">Match_Name</th>
                                            <th scope="col">Match_Type</th>
                                            <th scope="col">Total_Players</th>
                                            <th scope="col">Match_Time/min</th>
                                        </tr>
                                    </thead>
                                    {
                                        flist.map((value1) => {
                                            return (
                                                <tbody className="table-group-divider">
                                                    <tr key={value1.favouriteId}>
                                                        <th scope="row">{i++}</th>
                                                        <td>{value1.matchId}</td>
                                                        <td>{value1.matchName}</td>
                                                        <td>{value1.matchType}</td>
                                                        <td>{value1.playersCount}</td>
                                                        <td>{value1.matchTime}</td>
                                                        <td> <button type="button" style={{
                                                            borderBottomRightRadius: "15px",
                                                            borderTopLeftRadius: "15px"
                                                        }}
                                                            onClick={() => {
                                                                setConform(true);
                                                                getFavourites();
                                                                setForFav(value1.favouriteId);
                                                                toggle();
                                                                return (getFavourites)
                                                            }} className="btn btnm1 btn-danger">
                                                            Remove</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                </table>
                            }

                        </div>
                        <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br>
                        <div className="card text-bg-dark mb-3 back" >
                            <div className="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></div>
                            <div className="card-body">
                                <h5 className="card-title">Favourites</h5>
                                <br></br>
                                <p id="data">© 2021 KRAFTON, INC.PUBG IS A REGISTERED TRADEMARK OR SERVICE MARK OF KRAFTON, INC.PARTNERSHIP INQUIRY: PUBG_INQUIRY@PUBG.COM</p>
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
        )
    }
}