import React from 'react'
import { Link } from 'react-router-dom'
import './style.sass'
import img from '../../images/testAvatar.png'
import { PostPropTypes } from '../../../PropTypes'

const UserPostPreview =  ({post})=> {
    return (
        <div className='post-holder'>
            <Link to={ `/images/${ post.id }` }>
                <div className='image-wrapper'>
                    <div className='image-holder'>
                        <img src={ post.image.src } srcSet={ post.image.srcSet } alt={ post.image.alt }/>
                    </div>
                    <div className='image-mask'/>
                </div>
            </Link>
        </div>
    )
}
UserPostPreview.propTypes = {
    post : PostPropTypes.isRequired
}
UserPostPreview.defaultProps = {
    to : '/NotFound',
    image : {
        alt : 'No image was found'
    }
}
export default UserPostPreview