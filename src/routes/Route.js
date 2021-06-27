import React from 'react'
import { Route as ReactRoute } from 'react-router-dom'

function Route(props) {
  const { component: Component, path } = props

  return (
    <ReactRoute
      path={path}
      render={() => {
        return <Component />
      }}
    />
  )
}

export default Route
