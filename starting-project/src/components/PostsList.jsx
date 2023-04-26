import React from 'react'
import { useLoaderData } from 'react-router-dom'
import classes from './PostsList.module.css'
import Post from './Post'

const PostsList = () => {
  const posts = useLoaderData()

  return (
    <React.Fragment>
      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      ) : (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.id} name={p.name} text={p.body} id={p.id} />
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

export default PostsList
