import React from 'react'
import { Link } from 'react-router-dom'
import './style.sass'

const NotFoundPage = (props) => (
    <div className='not-found-page'>
        <h2>
            Sorry, this page isn't available.
        </h2>
        <p>
            The link you followed may be broken, or the page may have been removed.{' '}
            <Link to="/">Go back to Instagram.</Link>
        </p>
    </div>
)
export default NotFoundPage