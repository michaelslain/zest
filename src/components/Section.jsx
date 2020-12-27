import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Section.module.css'
import ThemeContext from '../ThemeContext'

export default function Section({ children, style, className, id }) {
    const theme = useContext(ThemeContext)

    const classes = [styles.div, styles[theme.theme], className].join(' ')

    return (
        <div className={classes} style={style} id={id}>
            {children}
        </div>
    )
}

Section.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
}
