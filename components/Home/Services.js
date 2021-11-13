import React, { useState } from "react";
import classes from "../style/Services.module.css";
import Link from "next/link";
const Services = () => {
  const [Explore, setExplore] = useState(false);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.Services_By_Expertes}>
          <div className={classes.Heading_Services}>
            <h2>Our Services</h2>
          </div>

          <div className={classes.pinkowal}>
            <img src="/pinkowal.svg" alt="" />
          </div>
          <div className={classes.whiteowal}>
            <img src="/Mainbackground.png" alt="" />
          </div>
          <div className={classes.services_collection}>
            <div className={classes.BookBank}>
              <div className={classes.BookBank_info}>
                {" "}
                <h1>BookBank</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>

            {/**__________ */}
            <div className={classes.Booksell}>
              <div className={classes.BookBank_info}>
                {" "}
                <h1> Book To Buy</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="Bookpurchase.jpg" alt="" />
              </div>
            </div>
            {/**________ */}
            <div className={classes.BookBank}>
              <div className={classes.BookBank_info}>
                {" "}
                <h1>CET</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="CET.jpg" alt="" />
              </div>
            </div>

            {/**__________ */}
            <div className={classes.Booksell}>
              <div className={classes.BookBank_info}>
                {" "}
                <h1>TEACH</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>
          </div>

          {/**
           *
           *
           *
           *
           */}
          <div className={classes.Explore_section}>
            {/** */}
            <div className={classes.Explore_}>
              <div className={classes.Explore_info}>
                {" "}
                <h1>TEACH</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>

            {/**_____ */}
            <div className={classes.Explore_}>
              <div className={classes.Explore_info}>
                {" "}
                <h1>TEACH</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>
            {/** */}
            <div className={classes.Explore_}>
              <div className={classes.Explore_info}>
                {" "}
                <h1>TEACH</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>

            {/**_____ */}
            <div className={classes.Explore_}>
              <div className={classes.Explore_info}>
                {" "}
                <h1>TEACH</h1>{" "}
                <center>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur tenetur repellendus repellat saepe.
                </center>{" "}
              </div>
              <div className={classes.image}>
                <img src="BookBank.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className={classes.MoreExplore}>
            <span>Explore</span>
            <img src="Exploremore.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
