import React from "react";
import web from "../src/images/pinto.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name="People share their feelings online in a very informal language"
                proname="Sentiment Analysis is a study of people's attitude, opinions, and emotions to classify whether it is positive, negative or neutral."
                imgsrc={web}
                visit="/senti"
                btname="Sentiment Analysis"
            />
        </>
    );
};

export default About;
