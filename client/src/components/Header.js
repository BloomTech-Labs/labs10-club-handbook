import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

const style = {
  parallax: {
    height: '80vh',
    maxHeight: '900px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
}

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    let windowScrollTop = window.pageYOffset / 3
    this.state = {
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    }
    this.resetTransform = this.resetTransform.bind(this)
  }
  componentDidMount() {
    let windowScrollTop = window.pageYOffset / 3
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    })
    window.addEventListener('scroll', this.resetTransform)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform)
  }
  resetTransform() {
    let windowScrollTop = window.pageYOffset / 3
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    })
  }
  render() {
    const { classes, className, children, style, small } = this.props
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.small]: small,
      [className]: className !== undefined,
    })
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          ...this.state,
        }}
        ref="parallax"
      >
        {children}
      </div>
    )
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string,
}

export default withStyles(style)(Parallax)
