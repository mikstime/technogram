import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Row from './Row'
import { PostPropTypes } from '../../PropTypes'
import uuid from 'uuid/v4'

class UserPosts extends Component {

    static propTypes = {
        posts : PropTypes.arrayOf(PostPropTypes),
    }
    static defaultProps = {
        posts : []
    }
    render() {
        const { posts } = this.props
        const parsedPosts = posts.reduce((memo, _, i, arr) => {
            if(i % 3 === 0) {
                const res = []
                res.push(arr[i])
                if(i + 1 < arr.length)
                    res.push(arr[i + 1])
                if(i + 2 < arr.length)
                    res.push(arr[i + 2])
                memo.push(res)
            }
            return memo
        }, [])
        return(
            <article className='user-posts-article'>
                <div>
                    <div className='rows-holder'>
                        {
                            parsedPosts.map(
                                //@TODO replace uuid by generated key
                            p => (<Row key={uuid()} posts={p}/>)
                        )}
                    </div>
                </div>
            </article>
        )
    }
}

export default UserPosts