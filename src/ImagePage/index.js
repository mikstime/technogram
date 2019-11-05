import React from 'react'
import MomentArticle from '../Moment'
import { Redirect, withRouter } from 'react-router-dom'
import { PostPropTypes } from '../PropTypes'
import withStore from './Network/withStore'

const ImagePage = ({post}) => {
    if ( post )
        return(<MomentArticle { ...post }/>)
    return(<Redirect to={'/NotFound'}/>)
}
ImagePage.propTypes = {
    post: PostPropTypes,
}
export default withRouter(withStore(ImagePage))