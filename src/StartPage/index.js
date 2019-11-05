import React from 'react'
import './style.sass'
import Moment from '../Moment'
import withMoments from './Network/withMoments'
import withStore from './Network/withStore'
import PropTypes from 'prop-types'
import { PostPropTypes } from '../PropTypes'

const Moments =  ({posts}) => {
    return(
    <section className='page-section'>
        <div>
            {posts.map(p => (
                <Moment
                    key={p.id}
                    {...p}
                />))
            }
        </div>
    </section>
    )
}
Moments.propTypes = {
    posts : PropTypes.arrayOf(PostPropTypes).isRequired,
}
export const WithNetwork = withStore(withMoments(Moments))