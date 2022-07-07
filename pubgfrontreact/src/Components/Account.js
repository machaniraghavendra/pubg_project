import React, { useEffect, useState } from 'react'
import { Home } from "./Home";
import { Link } from "react-router-dom";
import axios from 'axios';

function Account() {
    const[value,setValues]=useState([]);
    const details=()=>{
        axios.get("http://localhost:8083/userservice/").then((res)=>{setValues(res.data)});
    }
    useEffect(()=>{details();},[]);
    return (
        <div>
            <Home />
            <div className='account'>
                <div style={{textAlign:"center"}}>
                    <h3 style={{textAlign:"center",color:"greenyellow"}}>Account Details</h3>
                </div><br></br>
                {
                value.map((e)=>{return(
                    <div>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" placeholder={e.userName}  aria-label="Disabled input example" disabled/><br/>
                                <Link to="/update/username"><button type="button" class="btn btn-info"> Update Username</button></Link><br/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" placeholder={e.userEmail} aria-label="Disabled input example" disabled readonly/><br/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Mobile-No</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" placeholder={e.mobileNumber} aria-label="Disabled input example" disabled readonly/><br/>
                                <Link to="/update/usermobile"><button type="button" class="btn btn-info">Update Mobile-No</button></Link><br/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="Password" placeholder={e.password} aria-label="Disabled input example" disabled readonly/><br/>
                                <Link to="/update/userpassword"><button type="button" class="btn btn-info">Update Password</button></Link><br/>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}
export default Account;