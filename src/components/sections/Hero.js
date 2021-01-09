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
        // "center-content",
        // topOuterDivider && "has-top-divider",
        // bottomOuterDivider && "has-bottom-divider",
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
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            tangible
                        </h1>

                        <h3
                            className="fw-400 reveal-from-top"
                            data-reveal-delay="1500"
                        >
                            you are about to witness the
                            <div />
                            strength of street knowledge
                        </h3>
                        <p
                            className="fw-100 text-s reveal-from-top"
                            data-reveal-delay="2050"
                        >
                            Dr. Dre, Straight Outta Compton, 1998
                        </p>
                    </div>

                    <h4
                        className="spacer-64 reveal-from-top"
                        data-reveal-delay="2000"
                    >
                        coming soon.
                    </h4>
                   
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
