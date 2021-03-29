import React from "react";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Dre from "../components/sections/Dre";

const Features = () => {
    return (
        // ! id are used by router for in-page routing
        <>
            <Dre split />
            <FeaturesSplit id="features" />
        </>
    );
};

export default Features;
