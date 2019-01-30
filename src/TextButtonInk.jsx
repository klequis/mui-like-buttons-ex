import React from 'react'
import injectSheet from 'react-jss'
// import classNames from 'classnames'
import Ink from 'react-ink'

const TextButton = ({ children, classes }) => {
  // const clsNames =  classNames([
  //   classes.button,
  //   classes.ripple,
  // ])
  return (
      <button className={classes.button}>
        <Ink />
        {children}
      </button>
    )
}

const backgroundColor = 'rgba(0, 0, 0, 0)'
const primaryColor = 'rgb(33, 150, 243)'

const styles = {
  button: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderRadius: 4,
    borderStyle: 'none',
    borderWidth: 0,
    borderColor: primaryColor,
    borderImageWidth: 1,
    borderImageOutset: 0,
    borderImageRepeat: 'stretch',
    borderImageSlice: '100%',
    borderImageSource: 'none',
    boxSizing: 'border-box',
    color: primaryColor,
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: "'Roboto', sans-serif;sans-serif",
    fontSize: 14,
    fontWeight: 500,
    justifyContent: 'center',
    letterSpacing: 'normal',
    lineHeight: '24.5px',
    margin: 0,
    minWidth: 64,
    outlineColor: primaryColor,
    outlineStyle: 'none',
    outlineWidth: 0,
    padding: '6px 8px',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transitionDelay: '0s, 0s, 0s',
    transitionDuration: '0.25s, 0.25s, 0.25s',
    transitionProperty: 'background-color, box-shadow, border',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    MozUserSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      backgroundColor: 'rgba(63, 81, 181, 0.08)',
      textDecoration: 'none',
    },
  },
}
export default injectSheet(styles)(TextButton)
