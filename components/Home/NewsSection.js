import React, { useState, useEffect } from "react";
import classes from "../style/Newsection.module.css";

const NewsSection = () => {
  const [offsetX, setoffsetX] = useState(0);
  const handlsroll = () => {
    setoffsetX(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlsroll);
    return window.removeEventListener("scroll", null);
  }, []);

  return (
    <div className={classes.newsection}>
      <div className={classes.Testmonials}>
        <center>Testmonials</center>
        <center>Envrollment details</center>
        <center>Teaching Express section</center>
      </div>
      <div className={classes.NewsContainer}>
        <div className={classes.animationnews}>
          <div className={classes.animationtage}>
            <ul>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aufsadfsadfasft nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut afasfsafafgwarggsafgfnobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amfsdafsafwad sdafsdaf et consectetur
                adipisicing elit. Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta afsaf safsdafsafwfwefwarffut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor fd safsafdsaf sit amet consectetur adipisicing
                elit. Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut nobf safsadfwais.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amefsd afdsafsaft consectetur adipisicing
                elit. Repudiandae soluta aut nobis.
              </li>
              <li style={{ transform: `translateX( ${offsetX * 0.2}px)` }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae soluta aut nobis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
