import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
// import Input from "../elements/Input";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
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
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'cta-inner section-inner has-shadow',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split',
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="spacer-64">
        <div className="container-xs">
          <div className={innerClasses}>
            <div className="cta-slogan">
              <h3 className="invert-color m-0">Get Tangible.</h3>

              <h6 className="invert-color">
                Interested? drop us a line at{' '}
                <a href="mailto: info@tangibledata.io">info@tangibledata.io</a>
              </h6>
            </div>
            {/* <div className="cta-action">
                            <Input
                                id="newsletter"
                                hint="Your information will never be shared."
                                type="email"
                                label="Subscribe"
                                labelHidden
                                hasIcon="right"
                                placeholder="your@best.email"
                            >
                                <svg
                                    width="16"
                                    height="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                                        fill="#000"
                                    />
                                </svg>
                            </Input>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
