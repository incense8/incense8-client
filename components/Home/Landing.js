import React, { useState, useEffect, useContext } from "react";
import classes from "../style/Landing.module.css";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { store } from "../../context/authContext";
import Cookies from "js-cookie";

function Landing() {
  const router = useRouter();
  const [userinteraction ,setuserinteraction] = useState()
  const {state, dispatach} = useContext(store)
  const {userInfo} = state;
  const [headershow, setheadershow] = useState(true);
  const Register = () => {
    router.push("/Login");
  };

  const Dashboard =()=>{
    router.push("/Dashboard")
  }
  const Signup=()=>{
    router.push("/Signupage")
  }

  
const LogoutClick=()=>{
 dispatach({type:"USER_LOGOUT"})
 Cookies.remove("userInfo")
 router.push("/")
}
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setheadershow(false);
      } else {
        setheadershow(true);
      }
    
    });
 console.log(state)
 
  }, []);
  return (
    <div className={headershow ? classes.Header : classes.Headerdown}>
      <div className={classes.companyinfo}>
        <div className={classes.Logo_name}>
          <img src="/Logo.png" layout="fill" width={"30px"} height={"30px"} />
          <center>INCENSE8</center>
        </div>
      </div>
      <div className={classes.OurServices}>
        <div className={classes.Services}>
          <div className={classes.Services_check}>
            <ul>
              <li>
                <Link href="/register">BookBank </Link>
              </li>
              <li>
                <Link href="/">CET</Link>
              </li>
              <li>
                <Link href="/">LEET</Link>
              </li>
            </ul>
          </div>
          {/* {userinteraction} */}
          {
              userInfo ?
              <div className={classes.Dashboard_info}>
                <div><span>{userInfo.fullname}</span></div>
              <div className={classes.user_navigation}>
                 <button onClick={Dashboard}>Dashboard</button>
                 <button onClick={LogoutClick}>Logout</button>
              </div>
            </div>:
              <div className={classes.Signup_login}>
              <button onClick={Signup}>Signup</button>
                   <button onClick={Register}>Login </button>
             </div>
            }
        </div>
    
      </div>
    </div>
  );
      
}

export default Landing;
