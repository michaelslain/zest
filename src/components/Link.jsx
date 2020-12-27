import React, { cloneElement, useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Link.module.css'
import { Link } from 'react-router-dom'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'
import Scroll from '../Scroll'

export default function Link2({
    children,
    style,
    className,
    id,
    link,
    callback,
    color = 'primary',
    scrollTo,
}) {
    const theme = useContext(ThemeContext)
    const reactRouter = useContext(RouterContext)

    const isRouterLink = link != null && link.charAt(0) === '/' ? true : false

    const wrapper = reactRouter && isRouterLink ? <Link /> : <a></a>
    const classes = [styles.div, className].join(' ')

    const colorStyle = { color: theme[color] == null ? color : theme[color] }

    const hrefProp =
        link != null && !isRouterLink ? { href: link, target: '_blank' } : {}
    const mouseUpProp =
        scrollTo != null ? { onMouseUp: () => Scroll(scrollTo) } : {}

    return cloneElement(
        wrapper,
        {
            className: classes,
            style: { ...colorStyle, ...style },
            id,
            onClick: callback,
            to: link,
            ...hrefProp,
            ...mouseUpProp,
        },
        children,
    )
}

Link.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
    callback: PropTypes.func,
    color: PropTypes.string,
    scrollTo: PropTypes.string,
}
