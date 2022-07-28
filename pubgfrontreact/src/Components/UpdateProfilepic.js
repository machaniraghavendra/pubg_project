import React, { useState, useEffect } from 'react'
import { Home } from './Home';
import Avatar from "react-avatar-edit";
import { Link } from 'react-router-dom';

function UpdateProfilepic() {

    const [src, setSrc] = useState(false);
    const [preview, setPreview] = useState();
    const [store, setStore] = useState();
    const [conform, setConform] = useState(false);
    const [sure, setSure] = useState(false)
    const onClose = () => {
        setPreview(null);
    }
    const onCrop = (view) => {
        setPreview(view);
        setStore(preview)
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
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to update your profile?</h3>
                        <div className="option">
                            <a className="btn btnm yes btn-success" onClick={() => {
                                if (conform == true) {
                                    { localStorage.setItem("profile", store) }
                                    setConform(false);
                                    return (setConform(false),  toggle())
                                }
                            }
                            }>Yes <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg></a>
                            <a className="btn btnm yes btn-danger" style={{ background: "red" }} onClick={() => { return (setConform(false),toggle()) }}>No <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg></a>
                        </div>
                    </div> : ""}

                    {sure ?<>
                    <div className="Popup">
                        <h3 style={{ marginTop: "30px", marginLeft: "30px" }}>Do you want to remove your profile picture?</h3>
                        <div className="option">
                            <a className="btn btnm yes btn-danger " style={{ marginLeft: "40%", textAlign: "center" }} onClick={() => {  { localStorage.removeItem("profile", store) }return (setSure(false),toggle()) }}>Yes </a>
                            <a className="btn btnm yes btn-success " style={{  marginLeft: "4%",textAlign: "center" }} onClick={() => {  return (setSure(false),toggle()) }}>No </a>
                        </div>
                    </div>
                    </>
                     : "" }


                <div className="" id="blur">
                    <Home />
                    <div className='profile container-xxl margin-top'>
                        <div className='account'>
                            <div style={{ textAlign: "center" }}>
                                <h3 style={{ textAlign: "center", color: "greenyellow" }}>Profile Picture edit</h3><br />
                                {src ?
                                    <>
                                        <div className="Avatar" style={{ color: "white" }}>
                                            <div  className='arrowdown'><h2  className='arrowdownh2'>&darr;</h2></div>
                                            <Avatar width="50" height="200" onCrop={onCrop} onClose={onClose} >Choose File</Avatar>
                                            {preview && <><img src={preview} /><br /><br></br>
                                                <div >
                                                    <button className="but-active btn btn-success" onClick={() => { return (setConform(true),toggle()) }}>Update profile</button>
                                                    <button className="but-active btn btn-danger" onClick={() => { return(setSure(true),toggle())}}>Remove profile </button>
                                                    <button type="button" onClick={() => { setSrc(false) }} className="but-active btn btn-info">Go back</button>
                                                </div>
                                            </>}
                                        </div>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => { setSrc(true) }} type="button" className="but-active btn btn-primary">Edit</button>
                                        <button className="but-active btn btn-danger" onClick={() => { return(setSure(true),toggle())}}>Remove profile </button>
                                        <Link className="but-active btn btn-info" to="/account">Go back</Link>
                                    </>}
                            </div><br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateProfilepic
