import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
// import SectionHeader from './partials/SectionHeader';
import Image from "../elements/Image";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {
    const outerClasses = classNames(
        "features-tiles section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-tiles-inner section-inner pt-0",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames(
        "tiles-wrap center-content",
        pushLeft && "push-left"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <h2
                    data-reveal-delay="300"
                    className="mt-64 mb-64 reveal-scale-down"
                >
                    team
                </h2>
                <div className={innerClasses}>
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require("./../../assets/images/an.png")}
                                            width={256}
                                            height={256}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">Ariel Noyman</h4>
                                    <p className="m-0 text-sm">
                                        Urban modeling and simulation. PhD at
                                        MIT City Science. Recovering architect &
                                        planner, turned urban scientist
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require("./../../assets/images/rd.png")}
                                            width={256}
                                            height={256}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Dr. Ronan Doorley
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Data Scientist, spatial analytics, AI,
                                        modeling and predictions. Fulbright
                                        scholar, PhD in transportation
                                        engineering
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item reveal-from-bottom"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require("./../../assets/images/bg.png")}
                                            width={256}
                                            height={256}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Barak Goldstein
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Serial entrepreneur, sold his last
                                        venture to Salesforce in 2019. VC,
                                        oversaw +$1B portfolio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
