import React from 'react'
import { connect } from 'react-redux'
import produce from 'immer'
import uuid from 'uuid/v4'

const mapStateToProps = state => {

    return {
        posts : [
            ...state.posts.map(produce( p => {p.key = uuid()})),
        ]
    }
}

export default connect(mapStateToProps)