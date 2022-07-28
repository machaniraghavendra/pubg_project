import "../App.css";
import { Link } from "react-router-dom";

function Starting() {
    return(
        <div >
            <img className="logo flow" style={{width:"10%"}}src="https://na.battlegrounds.pubg.com/wp-content/themes/regionals/assets/images/header/pubg-logo-battlegrounds.png" />
            <Link className="btn  flow buttons btn-primary" to="/login" role="button">Sign-In</Link>
            <Link className="btn buttons flow btn-primary" to="/signup" role="button">Sign-Up</Link>
            <div >
                <img src="https://na.battlegrounds.pubg.com/wp-content/uploads/sites/3/2022/03/PUBG22ToWin_Social@1920x1080-1920x1080.jpg" class="img-fluid" alt="..."/>
                <div className="icons flow">
                    <a className="icons" href="https://www.facebook.com/PUBGMOBILE/"><i class="fa-brands fa-facebook"></i></a><br></br>
                    <a className="icons" href="https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en_IN&gl=US"><i class="fa-brands fa-google"></i></a><br></br>
                    <a className="icons" href="https://twitter.com/pubgmobile"><i class="fa-brands fa-twitter"></i></a><br></br>
                    <a className="icons" href="https://www.youtube.com/c/PUBGMOBILE"><i class="fa-brands fa-youtube"></i></a><br></br>
                    <a className="icons" href="https://www.instagram.com/pubgmobile/?hl=en"><i class="fa-brands fa-instagram"></i></a><br></br>
                    <a className="icons" href="https://www.tiktok.com/notfound"><i class="fa-brands fa-tiktok"></i></a><br></br>
                </div>
            </div>
        </div>
    )
}
export default Starting;