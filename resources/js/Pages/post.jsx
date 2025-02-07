import React from 'react';
import { LuHeart } from 'react-icons/lu';
import moment from 'moment';
import 'moment/locale/fr'; 
const Post = ({ posts ,auth}) => {
    const postList = Array.isArray(posts?.data) ? posts.data : Array.isArray(posts) ? posts : [];
    const timeAgo = (date) => date ? moment(date).fromNow() : 'il y a un moment';

    if (!postList.length) return <p className="text-center text-muted">Aucun post disponible.</p>;

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="card card-body rounded-3 my-3">
                    <div className="post">
                        <div className="post-image">
                            <img src={`/storage/${post.image}`} alt="" />
                        </div>
                        <div className="post-details">
                            <div className="row align-items-center mt-3">
                                <div className="col-md-6">
                                    <h4 className='h6'> {post.user?.username || 'Utilisateur inconnu'} | | <span className='text-muted'>{timeAgo(post.created_at)}</span></h4>
                                </div>
                                <div className="col-md-6 text-end">
                                    <h4 className='h6'><LuHeart /></h4>
                                </div>
                            </div>
                            <p className='text-muted small'>{post.description || 'Aucune description'}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Post;
