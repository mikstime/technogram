import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Row from './Row'
import { PostPropTypes } from '../../PropTypes'

class UserPosts extends Component {

    static propTypes = {
        posts : PropTypes.arrayOf(PostPropTypes),
    }
    static defaultProps = {
        posts : []
    }
    render() {
        console.log(this.props.posts)
        return(
            <article className='user-posts-article'>
                <div>
                    <div className='rows-holder'>
                        <Row/>
                    </div>
                </div>
            </article>
        )
    }
}

export default UserPosts