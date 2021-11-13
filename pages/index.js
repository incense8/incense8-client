import { useEffect, useState } from "react";
import Home from "../collection/Home";
import classes from "../styles/index.module.css";

function Homepage() {
   return (
    <div className={classes.app}>
      <Home  />
    </div>
  ); 
}

export default Homepage;
