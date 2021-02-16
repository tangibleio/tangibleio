import React from "react";
import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Dre from "../components/sections/Dre";

const Home = () => {
    return (
        <>
            <Hero />
            <Dre split />
            <FeaturesSplit />
        </>
    );
};

export default Home;
