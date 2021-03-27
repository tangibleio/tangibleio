import React from "react";
import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Dre from "../components/sections/Dre";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Cta from "../components/sections/Cta";

const Home = () => {
    return (
        // ! id are used by router for in-page routing
        <>
            <Hero />
            <Dre split />
            <Cta id="contact" />
            <FeaturesSplit id="features" />
            <FeaturesTiles id="team" />
        </>
    );
};

export default Home;
