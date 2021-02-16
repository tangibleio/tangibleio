import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool,
};

const defaultProps = {
    ...SectionProps.defaults,
    split: false,
};

const content = (
    <>
        <div className="container-xs">
            <h2
                className="fw-900 invert-color reveal-scale-down"
                data-reveal-delay="700"
            >
                “you are about to witness the strength of street knowledge.”
            </h2>
            <h6
                className="reveal-scale-down invert-color mb-0 fw-200"
                data-reveal-delay="800"
            >
                Straight Outta Compton, 1998
            </h6>
            <p className="reveal-scale-down invert-color mt-32 fw-500">
                Online retailers have great visibility into their clients’
                activity, but 'tangible' businesses are blind outside of their
                storefronts. Tangible is an AI Location Intelligence platform
                that analyses behavioral, spatial, demographic, and economic
                data, to infer and simulate city-scale population behavior.
            </p>
        </div>
    </>
);

const Dre = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {
    const outerClasses = classNames(
        "cta section center-content-mobile reveal-from-bottom",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "cta-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider",
        split && "cta-split"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className={innerClasses}>{content}</div>
        </section>
    );
};

Dre.propTypes = propTypes;
Dre.defaultProps = defaultProps;

export default Dre;
