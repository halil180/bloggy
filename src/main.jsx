import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"posts",
        element:<Posts/>
      },
      {
        path:"create",
        element:<CreatePost/>
      },
      {
        path:"post/:postId",
        element:<Post/>
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qdp67cma.us.auth0.com"
    clientId="ixmpTNnz8MR8VFvqyWt8jSMbzAyEOVuO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <RouterProvider router={router} />
    </Auth0Provider>
)
