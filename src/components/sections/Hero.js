import React from 'react'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
import ReactPlayer from 'react-player'

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
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    'has-bg-color',
    className,
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container-fh">
          <div className="video-background">
            <div className="video-foreground">
              <ReactPlayer
                url={'https://youtu.be/uUKIKml17AU'}
                playing={true}
                controls={false}
                muted
                loop
                width="100vw"
                height="100vh"
              />
            </div>
          </div>
          {/* </div> */}
          <div className={innerClasses}>
            <div className="hero-content">
              <div className="container">
                <h1
                  data-reveal-delay="300"
                  className="spacer-64 pt-64  mb-16 reveal-scale-down invert-color"
                >
                  tangible
                </h1>
                <h2
                  className="m-0 mt-32 pt-64 reveal-from-left invert-color"
                  data-reveal-delay="200"
                >
                  Location-driven businesses strive by predicting how people
                  move.
                </h2>
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
