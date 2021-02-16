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
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        "has-bg-color",
        className
    );

    const innerClasses = classNames(
        "hero-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container-fh">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            data-reveal-delay="100"
                            className="mt-0 mb-16 reveal-scale-down"
                        >
                            tangible
                        </h1>
                        <div className="container-xs">
                            <h2
                                className="m-0 mb-64 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                location-driven businesses strive when they know
                                how people move.
                            </h2>
                            <div
                                className="reveal-from-bottom"
                                data-reveal-delay="600"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
