import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
        "split-wrap",
        invertMobile && "invert-mobile",
        invertDesktop && "invert-desktop",
        alignTop && "align-top"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className="container-sm">
                    <p className="reveal-scale-down  mt-32 fw-500">
                        Online retailers have great visibility into their
                        clients’ activity, but tangible businesses are blind
                        outside of their storefronts. Tangible is an AI Location
                        Intelligence platform that analyses behavioral, spatial,
                        demographic, and economic data, to infer and simulate
                        city-scale population behavior.
                    </p>
                </div>
                <div className={innerClasses}>
                    <div className={splitClasses}>
                        {/* START */}

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs fw-600 tt-u mb-8">
                                    Know your business footprint
                                </div>
                                <h3 className="mt-0 mb-12">Insights</h3>
                                <p className="m-0">
                                    Tangible helps business owners make better
                                    decisions using spatio-behavioral data and
                                    predictive modeling. We fuse telecom data
                                    with various sources of demographic
                                    information to create a virtual twin model.
                                    This model can augment user-defined
                                    locations with realistic population
                                    demographics and behaviours.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/hero_1.png")}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        {/* START */}
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs  fw-600 tt-u mb-8">
                                    From Retospect to Forecast
                                </div>
                                <h3 className="mt-0 mb-12">Predict</h3>
                                <p className="m-0">
                                    Understand the impact of various ‘what if?’
                                    scenarios, such as spatial transformations
                                    in business location, updated working-hours,
                                    impact of near-by developments, and other
                                    global events.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/hero_0.jpg")}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        {/* START */}
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs  fw-600 tt-u mb-8">
                                    explore 'what if?' scenarios
                                </div>
                                <h3 className="mt-0 mb-12">Transform</h3>
                                <p className="m-0">
                                    Tangible provides an iterative platform to
                                    freely simulate future scenarios such as
                                    increased or decreased foot-traffic, changes
                                    to the clients’ demographics, policy
                                    changes, and captial projects.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/hero_2.png")}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
