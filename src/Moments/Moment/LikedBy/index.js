import React from 'react'
import './style.sass'
import { MicroAvatar } from '../../../Primitives/User/Avatars'

export default ({ srcSet, src, alt}) => (
    <section className='comment-liked-by-section'>
        <div className='comment-liked-by-holder'>
            <div className='comments-liked-by-avatar'>
                <MicroAvatar srcSet={srcSet} src={src} alt={alt}/>
            </div>
            <div className='comments-liked-by-text'>
                Liked by <a className="FPmhX notranslate cqXBL" title="tacsivole" href="/tacsivole/">tacsivole</a> and <button
                className="sqdOP yWX7d     _8A5w5    " type="button"><span>3</span> others</button>
            </div>
        </div>
    </section>
)