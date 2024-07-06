import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError();
    console.error(error)

  return (
    <div>
        <h2>Oops!</h2>

        <h3>Seem like this route don't exists</h3>

        <p>Error: <i>{error.statusText || error.message}</i></p>

    </div>
  )
}

export default NotFound