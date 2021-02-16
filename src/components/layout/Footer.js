import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import FooterNav from "./partials/FooterNav";
// import FooterSocial from "./partials/FooterSocial";

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
                    <div className="footer-bottom space-between text-xxs ">
                        {/* <FooterSocial /> */}
                        <h6 className={'invert-color'}>Coming soon from MIT.</h6>
                        {/* <FooterNav /> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;