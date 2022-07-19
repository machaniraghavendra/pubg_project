import React, { useEffect } from 'react'
import { Home } from './Home';

function Home1() {
    useEffect(()=>{localStorage.getItem("Raghu")})
    if(localStorage.getItem("Raghu")){
    return (
        <div>
            <Home />
            <div>
                <iframe style={{ margin: "50px 0px 0px 70px" }} width="684" height="385" src="https://www.youtube.com/embed/dPLH0jb8k88" title="WELCOME TO PUBG MOBILE Official song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div class="card text-bg-dark mb-3 back" >
                    <div class="card-header"><img src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" /></div>
                    <div class="card-body">
                        <h5 class="card-title">WELCOME TO PUBG OFFICIAL</h5>
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
    )}
}
export default Home1;