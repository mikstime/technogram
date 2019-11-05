import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (WrappedComponent) {


    const mapStateToProps = (state, ownProps) => {
        const { pathname } = ownProps.location
        const postId = pathname.split('/')[2];

        for(let i = 0; i < state.posts.length; i++) {
            if(state.posts[i].id === postId) {
                return {post : {...state.posts[i]}}
            }
        }
        for(let user in state.users) {
            for(let i = 0; i < state.users[user].posts.length; i++) {

                if ( state.users[user].posts[ i ].id === postId ) {
                    const res = {
                        post : {
                            ...state.users[user].posts[ i ],
                            author : { ...state.users[ state.users[user].posts[ i ].author.userName ] }
                        }
                    }
                    return res
                }
            }
        }
        return {

        }
    }
    WrappedComponent = connect(mapStateToProps)(WrappedComponent)
    return class extends Component {
        //@TODO load post data from store

        render() {
            return(
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                />
            )
        }

    }
}