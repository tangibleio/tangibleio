import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ReactPlayer from "react-player";

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
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url=""
                    position="absolute"
                    zIndex="-1"
                    top="0"
                    left="0"
                    width="100vw"
                    height="100vh"
                />
            </div>
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
                                className="m-0 mt-64 mb-64 reveal-from-left"
                                data-reveal-delay="200"
                            >
                                help location-driven businesses strive by
                                predicting how people move.
                            </h3>

                            <h6
                                className="mt-64 mb-64 reveal-from-right"
                                data-reveal-delay="300"
                            >
                                Coming soon from MIT
                            </h6>
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
