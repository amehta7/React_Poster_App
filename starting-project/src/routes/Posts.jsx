import React from 'react'
import PostsList from '../components/PostsList'
import { Outlet } from 'react-router-dom'

function Posts() {
  return (
    <React.Fragment>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </React.Fragment>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts')
  const data = await response.json()
  return data.posts
}
