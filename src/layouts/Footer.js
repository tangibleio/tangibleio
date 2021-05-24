import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";

const propTypes = {
    topOuterDivider: PropTypes.bool,
    topDivider: PropTypes.bool,
};

const defaultProps = {
    topOuterDivider: false,
    topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
    const classes = classNames(
        "site-footer center-content-mobile",
        topOuterDivider && "has-top-divider",
        className
    );

    return (
        <footer {...props} className={classes}>
            <div className="container">
                <div className={classNames("site-footer-inner")}>
                    <div className="footer-top space-between text-xxs">
                        <h6 className="invert-color">Tangible</h6>
                        <FooterSocial />

                        <a href="mailto: info@tangibledata.io">
                            info@tangibledata.io
                        </a>
                    </div>

                    <div className="footer-bottom space-between text-xxs ">
                        <div className="invert-color footer-copyright">
                            Coming soon from MIT.
                        </div>
                        <FooterNav />
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
