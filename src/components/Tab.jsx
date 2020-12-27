import React, { useContext, cloneElement } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Tab.module.css'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'
import Scroll from '../Scroll'

export default function Tab({
    children,
    className,
    style,
    id,
    link,
    callback,
    scrollTo,
}) {
    const theme = useContext(ThemeContext)
    const reactRouter = useContext(RouterContext)

    const isRouterLink = link != null && link.charAt(0) === '/' ? true : false

    const wrapper = reactRouter && isRouterLink ? <Link /> : <a></a>
    const classes = [styles.div, styles[theme.theme], className].join(' ')

    const hrefProp =
        link != null && !isRouterLink ? { href: link, target: '_blank' } : {}
    const mouseUpProp =
        scrollTo != null ? { onMouseUp: () => Scroll(scrollTo) } : {}

    return cloneElement(
        wrapper,
        {
            className: classes,
            style,
            id,
            onClick: callback,
            to: link,
            ...hrefProp,
            ...mouseUpProp,
        },
        children,
    )
}

Tab.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    link: PropTypes.string,
    callback: PropTypes.func,
    scrollTo: PropTypes.string,
}
