import React from 'react'
import PropTypes from 'prop-types'
import styles from './Nav.module.css'

export default function Nav({ children, style, className, id }) {
    const classes = [styles.div, className].join(' ')

    return (
        <div className={classes} style={style} id={id}>
            {children}
        </div>
    )
}

Nav.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
}
