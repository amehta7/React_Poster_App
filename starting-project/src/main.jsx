import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as fetchPostLoader } from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import NewPost, { action as addPostAction } from './routes/NewPost'
import PostDetails, {
  loader as fetchPostDetailLoader,
} from './routes/PostDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: fetchPostLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: addPostAction,
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: fetchPostDetailLoader,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
