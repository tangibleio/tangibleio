import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'

import ReactPlayer from 'react-player'
const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const PlatfromVideo = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <h2 data-reveal-delay="300" className="mt-64 reveal-scale-down">
          tangible
        </h2>
        <h4 data-reveal-delay="300" className="mt-32 mb-64 reveal-scale-down">
          <p>Location Intelligence platform. Iterative, interactive, real-time.</p>
    
        </h4>
        <div className="player-wrapper">
          <ReactPlayer
            url={'https://youtu.be/85fMtE18w9Q'}
            playing={true}
            controls={false}
            muted
            className="react-player"
            loop
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  )
}

PlatfromVideo.propTypes = propTypes
PlatfromVideo.defaultProps = defaultProps

export default PlatfromVideo
