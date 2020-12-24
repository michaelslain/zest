import React from 'react'
import PropTypes from 'prop-types'
import styles from './Nav.module.css'

export default function Nav({ children, style, className }) {
    const classes = [styles.div, className].join(' ')

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    )
}

Nav.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}
