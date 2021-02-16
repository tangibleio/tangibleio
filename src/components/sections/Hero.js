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
                
                        <div className="container-xs">
                            <h1
                                data-reveal-delay="300"
                                className="mt-0 mb-16 reveal-scale-down"
                            >
                                tangible
                            </h1>

                            <h3
                                className="m-0 mt-64 reveal-from-left"
                                data-reveal-delay="200"
                            >
                                Tangible helps location-driven businesses strive
                                by predicting how people move.
                            </h3>
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
