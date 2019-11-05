import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import Image from './Image'
import UserInfo from './UserInfo'
import Comments from './Comments'
import Metrics from './Metrics'
import LeaveComment from './LeaveComment'
import { CommentPropTypes, ImagePropTypes, LikesPropTypes, UserPropTypes } from '../PropTypes'

//@TODO Real Comments
const MomentArticle = ({className, author,
                           likes, image, comments, ...rest }) => (
    <article className={`${className} moment-article` } {...rest}>
        <UserInfo srcSet={author.avatar.srcSet} alt={`${author.userName}'s Avatar`}
                  userName={author.userName} src={author.avatar.src}/>
        <Image srcSet={image.srcSet} alt={image.alt} src={image.src}/>
        <div className='moment-section'>
            <Comments comments={comments}/>
            <Metrics/>
            {/*<LikedBy src={user.avatar} srcSet={user.avatar} alt={`${user.userName}'s Avatar`}/>*/}
            <LeaveComment/>
        </div>
    </article>
)
MomentArticle.propTypes = {
    className : PropTypes.string,
    image : ImagePropTypes.isRequired,
    author : UserPropTypes.isRequired,
    likes : LikesPropTypes.isRequired,
    comments : PropTypes.arrayOf(CommentPropTypes).isRequired,
}
MomentArticle.defaultProps = {
    className : '',
}
export default MomentArticle