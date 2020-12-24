import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Heading.module.css'
import ThemeContext from '../ThemeContext'

export default function Heading({ children, className, style }) {
    const theme = useContext(ThemeContext)

    const classes = [styles.div, styles[theme.theme], className].join(' ')

    return (
        <h1 className={classes} style={style}>
            {children}
        </h1>
    )
}

Heading.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
}
