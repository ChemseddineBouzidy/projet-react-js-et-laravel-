import React from 'react'
import { LuHeart } from 'react-icons/lu'

const Post = () => {
    return (
        <div className="card card-body rounded-3 my-3">
            <div className="post">
                <div className="post-image">
                    <img src="https://stan-timelapse-photographie.fr/wp-content/uploads/2020/11/Post-traitement.jpg" alt="" />
                </div>
                <div className="post-details">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <h4 className='h6'>Carlos Alognon | <span className='text-muted'>il y a 3 min</span></h4>
                        </div>
                        <div className="col-md-6">
                            <h4 className='h6 text-end'><LuHeart/></h4>
                        </div>
                    </div>
                    <p className='text-muted small'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Post
