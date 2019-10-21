import React from 'react'
import './style.sass'

const LeaveComment = (props) => (
    <section className='leave-comment-section'>
        <div className='leave-comment-body'>
            <form>
                <textarea
                    aria-label="Add a comment…"
                    placeholder="Add a comment…"
                    autocomplete="off"
                    autocorrect="off"
                />
                <button>Post</button>
            </form>
        </div>
    </section>
)

export default LeaveComment