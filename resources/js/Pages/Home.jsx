import React from 'react'
import Createpost from './Createpost'
import Post from './post'
import { usePage } from '@inertiajs/react';

function Home() {
  const { posts } = usePage().props;
  console.log( posts)
  return (
    <div className="container my-3 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card card-body rounded-3 shadow-sm create-post">
            <Createpost />
          </div>

          <div className="posts">
          <Post posts={posts} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home