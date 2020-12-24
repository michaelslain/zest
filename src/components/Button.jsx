import React, { useContext, cloneElement, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'
import { toRGB, getBrightness } from '../Color'

export default function Button({ children, style, className, link, callback }) {
    const theme = useContext(ThemeContext)
    const reactRouter = useContext(RouterContext)

    const isRouterLink = link != null && link.charAt(0) === '/' ? true : false

    // gets brightness of button to determine text color
    const primaryRGB = toRGB(theme.primary)
    const secondaryRGB = toRGB(theme.secondary)
    const averageBrightness =
        (getBrightness(primaryRGB) + getBrightness(secondaryRGB)) / 2
    const textColorClass =
        averageBrightness >= 50 ? styles['dark-text'] : styles['light-text']

    const backgroundStyle = {
        background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
    }

    const wrapper = reactRouter && isRouterLink ? <Link /> : <div></div>
    const classes = [
        styles.container,
        styles[theme.theme],
        className,
        textColorClass,
    ].join(' ')

    const hrefProp =
        link != null && !isRouterLink ? { href: link, target: '_blank' } : {}

    return cloneElement(
        wrapper,
        {
            className: classes,
            style: { ...style },
            onClick: callback,
            to: link,
            ...hrefProp,
        },
        <Fragment>
            {children}
            <div className={styles.background} style={backgroundStyle}></div>
            <div className={styles['hover-background']}></div>
            <div className={styles.glow} style={backgroundStyle}></div>
        </Fragment>,
    )
}

Button.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    link: PropTypes.string,
    callback: PropTypes.func,
}
