import React from "react";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import classNames from "classnames";

const outerClasses = classNames(
    "hero section center-content",

    "has-bg-color",
    "invert-color"
);

const Product = () => {
    return (
        <section className={outerClasses}>
            <h2
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
            >
                tangible
            </h2>
           
            <FeaturesSplit />
        </section>
    );
};

export default Product;
