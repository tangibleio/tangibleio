import React from 'react'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

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
    'hero section',
    'has-bg-color',
    className,
    'has-bg-color',
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="vimeo-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uUKIKml17AU?rel=0;&controls=0&autoplay=1&mute=1&loop=1&playlist=uUKIKml17AU"
            title="Tangible"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container-fh">
          <div className={innerClasses}>
            <div className="hero-content">
              <div className="container">
                <h1
                  data-reveal-delay="300"
                  className="spacer-64 pt-64  mb-16 reveal-scale-down invert-color"
                >
                  tangible
                </h1>
                <h3
                  className="m-0 mt-32 pt-64 reveal-from-left invert-color"
                  data-reveal-delay="200"
                >
                  Location-driven businesses strive by predicting how people
                  move.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
