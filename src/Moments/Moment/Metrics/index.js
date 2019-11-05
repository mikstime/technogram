import React from 'react'
import './style.sass'
import {
    CommentLikesIcon as LikesIcon,
    CommentsCommentsIcon as CommentsIcon,
    CommentsSaveIcon as SaveIcon,
    CommentsShareIcon as ShareIcon
} from '../../../Primitives/Icons'

export default props => (
    <section className='metrics-section'>
        <span className='metrics-span metrics-span-first'>
            <button>
                <LikesIcon/>
            </button>
        </span>
        <span className='metrics-span'>
            <button>
                <CommentsIcon/>
            </button>
        </span>
        <span className='metrics-span'>
            <button>
                <ShareIcon/>
            </button>
        </span>
        <span className='metrics-span metrics-span-last'>
            <button>
                <SaveIcon/>
            </button>
        </span>
    </section>
)