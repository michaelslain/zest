import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'

export default function Hero({
    children,
    alignment = 'center',
    style,
    className,
    id,
}) {
    const classes = [styles.div, styles[alignment], className].join(' ')

    return (
        <div className={classes} style={style} id={id}>
            {children}
        </div>
    )
}

Hero.propTypes = {
    alignment: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
}
