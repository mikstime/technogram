import React from 'react'
import './style.sass'
import Moment from '../Moments/Moment'
import withMoments from './Network/withMoments'
import withStore from './Network/withStore'
import PropTypes from 'prop-types'

const Moments =  ({posts}) => {
    return(
    <section className='page-section'>
        <div>
            {posts.map(p => (
                <Moment
                    comments={p.comments}
                    user={p.user}
                    image={p.image}
                    likes={p.likes}
                />))
            }
        </div>
    </section>
    )
}
Moments.propTypes = {
    user : PropTypes.shape({
        userName : PropTypes.string.isRequired,
        avatar : PropTypes.string.isRequired,
        pseudonym : PropTypes.shape.isRequired,
    }).isRequired,
    posts : PropTypes.arrayOf(PropTypes.shape({
        user : PropTypes.shape({
            userName : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired,
            pseudonym : PropTypes.shape.isRequired,
        }).isRequired,
        likes : PropTypes.arrayOf(PropTypes.shape({
            userName : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired,
        })).isRequired,
        comments : PropTypes.arrayOf(PropTypes.shape({
            text : PropTypes.string.isRequired,
            author : PropTypes.shape({
                userName : PropTypes.string.isRequired,
                avatar : PropTypes.string.isRequired,
            }),
            likes : PropTypes.arrayOf(PropTypes.shape({
                userName : PropTypes.string.isRequired,
                avatar : PropTypes.string.isRequired,
            })),
            date : PropTypes.string.isRequired,
        })).isRequired,
    })),
}
export const WithNetwork = withStore(withMoments(Moments))