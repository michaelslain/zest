import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
import ThemeContext from '../ThemeContext'

export default function Header({ children, style, className }) {
    const theme = useContext(ThemeContext)

    const extraStyle = {
        justifyContent:
            Array.isArray(children) && children.length > 1
                ? 'space-between'
                : 'space-around',
    }
    const classes = [styles.div, styles[theme.theme], className].join(' ')

    return (
        <div className={classes} style={{ ...extraStyle, ...style }}>
            {children}
        </div>
    )
}

Header.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}
