import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const PartnersSection = ({
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

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-64',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left',
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <h2 data-reveal-delay="300" className="mt-64 mb-64  reveal-scale-down">
          Partners
        </h2>

        {/*  */}
        <div className={innerClasses}>
          <div className={tilesClasses}>
            {/*  */}

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/partners/mit.png')}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-8 mb-8">
                    Massachusetts Institute of Technology
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/partners/cs.png')}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-8 mb-8">City Science, MIT Media Lab</p>
                </div>
              </div>
            </div>

            {/*  */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/partners/designx.png')}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-8 mb-8">DesignX Accelerator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PartnersSection.propTypes = propTypes
PartnersSection.defaultProps = defaultProps

export default PartnersSection
