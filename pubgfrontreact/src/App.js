import './App.css';
import { Tournaments } from './Components/Tournaments';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Characters } from './Components/Characters';
import { ErrorPage } from './Components/ErrorPage';
import { Favourite } from './Components/Favourites';
import { Recommendation } from './Components/Recommendation';
import { Matches } from './Components/Matches';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Starting from './Components/Starting';
import Account from './Components/Account';
import Home1 from './Components/Home1';
import Username from './Components/Username';
import Usermobile from './Components/Usermobile';
import Userpassword from './Components/Userpassword';
import { useEffect } from 'react';
import UpdateProfilepic from './Components/UpdateProfilepic';
function App() {
  useEffect(() => { })
  if (localStorage.getItem("Raghu")) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/pubg" element={<Home1 />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/favourites" element={<Favourite />} />
            <Route path="/recommended" element={<Recommendation />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/account" element={<Account />} />
            <Route path="/update/username" element={<Username />} />
            <Route path="/update/usermobile" element={<Usermobile />} />
            <Route path="/update/userpassword" element={<Userpassword />} />
            <Route path="/update/profilepic" element={<UpdateProfilepic />} />
            <Route path="/" element={<Starting />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    )
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>)
  }


}

export default App;
