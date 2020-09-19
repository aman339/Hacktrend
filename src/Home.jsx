import React from "react";
import web from "../src/images/way3.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                proname="In future aspect, this sentiment analysis will be achieve more in the state of Statistical business and it will gives you an easy advise that you have to make change in your decisions. Get started with Believer and we share some preventions for Covid-19 "
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;
