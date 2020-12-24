import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeContext from '../ThemeContext'
import RouterContext from '../RouterContext'
import Page from './Page'
import '../style.css'

const defaultThemeContext = {
    theme: 'dark',
    primary: '#fc466b',
    secondary: '#3f5efb',
}

export default function Website({ children, theme = defaultThemeContext }) {
    useEffect(() => {
        const bodyStyles = {
            background: theme.theme === 'dark' ? '#070a12' : 'white',
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
        }

        Object.entries(bodyStyles).forEach(entry => {
            const key = entry[0]
            const value = entry[1]

            document.body.style[key] = value
        })
    }, [theme])

    let reactRouter = false

    const handleCheckForPages = child => (reactRouter = child.type === Page)

    if (Array.isArray(children))
        children.forEach(child => handleCheckForPages(child))
    else handleCheckForPages(children)

    const contexts = [
        { context: ThemeContext, value: theme },
        { context: RouterContext, value: reactRouter },
    ]

    const handleProviders = (i = 0) => {
        const Context = contexts[i]
        const child =
            i < contexts.length - 1
                ? handleProviders(i + 1)
                : children.map((child, i) => {
                      console.log(child)
                      return (
                          <Route
                              key={i}
                              path={`/${child.props.name || ''}`}
                              render={() => child}
                              exact={
                                  child.props.name === '' ||
                                  child.props.name == null
                              }
                          />
                      )
                  })

        return (
            <Context.context.Provider value={Context.value}>
                {child}
            </Context.context.Provider>
        )
    }

    if (reactRouter)
        return (
            <Router>
                <Switch>{handleProviders()}</Switch>
            </Router>
        )

    return handleProviders()
}

Website.propTypes = {
    theme: PropTypes.object,
}
