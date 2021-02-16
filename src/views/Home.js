import React from "react";
import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Dre from "../components/sections/Dre";
import FeaturesTiles from "../components/sections/FeaturesTiles";

const Home = () => {
    return (
        <>
            <Hero />
            <Dre split />
            <FeaturesSplit />
            <FeaturesTiles/>
        </>
    );
};

export default Home;
