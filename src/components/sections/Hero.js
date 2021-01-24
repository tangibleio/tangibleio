import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const outerClasses = classNames(
        "illustration-section-01",
        "hero section",
        "center-content",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        className
    );

    const innerClasses = classNames(
        "hero-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            data-reveal-delay="100"
                            className="mt-0 mb-16 reveal-scale-down"
                        >
                            tangible
                        </h1>
                        <h3
                            className="fw-100 mb-16 spacer-64 reveal-scale-down"
                            data-reveal-delay="700"
                        >
                            “you are about to witness the strength of street
                            knowledge.”
                        </h3>
                        <h6
                            className="reveal-scale-down mb-0 fw-300"
                            data-reveal-delay="800"
                        >
                            Straight Outta Compton, 1998
                        </h6>
                        <h4
                            className="spacer-64 reveal-scale-down mt-0 mb-16 fw-200"
                            data-reveal-delay="1000"
                        >
                            coming soon.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
