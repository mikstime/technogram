import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Moment from './Moment'
import { withMoments } from './Network'
import { connect } from 'react-redux'

const mapStateToProps = state => ({...state.sessionid})

class Moments extends Component {

    static propTypes = {
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
    render() {
        const { posts } = this.props
        console.log(posts[0])
        return(
            <div className='moments-holder'>
                <div className='moment-holder'>
                    {posts.map(p => (
                        <Moment
                            comments={p.comments}
                            user={p.user}
                            likes={p.likes}
                            image={p.image}
                        />))
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withMoments(Moments))