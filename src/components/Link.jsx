import React, { cloneElement, useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Link.module.css'
import { Link } from 'react-router-dom'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'

export default function Link2({
    children,
    style,
    className,
    link,
    callback,
    color = 'primary',
}) {
    const theme = useContext(ThemeContext)
    const reactRouter = useContext(RouterContext)

    const isRouterLink = link != null && link.charAt(0) === '/' ? true : false

    const wrapper = reactRouter && isRouterLink ? <Link /> : <a></a>
    const classes = [styles.div, className].join(' ')

    const colorStyle = { color: theme[color] == null ? color : theme[color] }

    const hrefProp =
        link != null && !isRouterLink ? { href: link, target: '_blank' } : {}

    return cloneElement(
        wrapper,
        {
            className: classes,
            style: { ...colorStyle, ...style },
            onClick: callback,
            to: link,
            ...hrefProp,
        },
        children,
    )
}

Link.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    link: PropTypes.string,
    callback: PropTypes.func,
    color: PropTypes.string,
}
