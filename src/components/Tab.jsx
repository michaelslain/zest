import React, { useContext, cloneElement } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Tab.module.css'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'

export default function Tab({ children, className, style, link, callback }) {
    const theme = useContext(ThemeContext)
    const reactRouter = useContext(RouterContext)

    const isRouterLink = link != null && link.charAt(0) === '/' ? true : false

    const wrapper = reactRouter && isRouterLink ? <Link /> : <div></div>
    const classes = [styles.div, styles[theme.theme], className].join(' ')

    const hrefProp =
        link != null && !isRouterLink ? { href: link, target: '_blank' } : {}

    return cloneElement(
        wrapper,
        {
            className: classes,
            style,
            onClick: callback,
            to: link,
            ...hrefProp,
        },
        children,
    )
}

Tab.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    link: PropTypes.string,
    callback: PropTypes.func,
}
