import React, { useEffect, useState } from "react";
import "../App.css";
import { Home } from "./Home";
import axios from 'axios';
export function Tournaments() {

    const [list, setList] = useState([]);
    const getTournaments = async () => {
        axios.get("http://localhost:8081/tournamentlist/")
            .then(response => { setList(response.data) });
    }

    const [search, setSearch] = useState("");

    useEffect(() => { getTournaments(); }, []);
    if (localStorage.getItem("Raghu")) {
        return (
            <div className="container-fluid">
                <Home />
                <div className="container-xxl margin-top">
                    <h1 className="title">Tournaments</h1>
                    <div>
                        <iframe width="684" height="385" className="iframe" src="https://www.youtube.com/embed/N7DlCZlPpbU" title="PUBG GLOBAL CHAMPIONSHIP WINNER GEN.G - FINAL GAME - Pio, Loki, Esth3r & Taemin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                    <div className="backt">
                        <h1 className="pubg">PUBG Mobile Tournaments Statistics</h1>
                        <div style={{ width: "30%" }} className="input-group">
                            <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control rounded form-control" placeholder="Search here with ID/Name/Status" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                        <div className="table-responsive table-total ttable">
                            <table style={{ width: "80%" }} className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Period/months</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Watched/hr</th>
                                        <th scope="col">Launched Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.filter(val => {
                                            if (search == "") {
                                                return val;
                                            }
                                            if ((val.tournamentId.toLowerCase().includes(search.toLowerCase()) ||
                                                val.tournamentName.toLowerCase().includes(search.toLowerCase()) ||
                                                val.tournamentStatus.toLowerCase().includes(search.toLowerCase()))) {
                                                return val;
                                            }
                                        })
                                            .map((val) => {
                                                return (<tr key={val.tournamentId}>
                                                    <th scope="row">{val.tournamentId}</th>
                                                    <td>{val.tournamentName}</td>
                                                    <td>{val.tournamentPeriod}</td>
                                                    <td>{val.tournamentStatus}</td>
                                                    <td>{val.hoursWatched}</td>
                                                    <td>{val.tournamentDate}</td>
                                                </tr>
                                                )
                                            }
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <br></br><br></br><br></br>
                        <p className="about" style={{ color: "white" }}>
                            <h4>About PUBG Mobile tournaments</h4>
                            <p>The successor to the founder of the battle royale genre: PlayerUnknown's Battlegrounds. The mobile version was released with the support of Tencent Games and is a carbon copy of the original title. The game became extremely popular across Eastern countries, starting from its very first days.</p>
                            <p>Its esports system offers much variety, featuring both club tournaments like PMCO and the national PMPL team competitions. Many top organizations of the world have their PUBG Mobile rosters, including TSM, Fnatic, Team Secret, and others.</p>
                            <p>To illustrate the gigantic level of popularity, in August 2020, the eastern division of PUBG Mobile World League reached a mark of one million viewers, setting a new record for the discipline.</p>
                        </p>
                        <br></br><br></br><br></br>
                        <div className="card text-bg-dark mb-3 back" >
                            <div className="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></div>
                            <div className="card-body">
                                <h5 className="card-title">Tournaments</h5>
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
