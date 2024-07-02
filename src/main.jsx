import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/jobs',
        element:<Jobs></Jobs>
      },
      {
        path: '/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json') //Only load the data you need.do not load all the data. 
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch ('/jobs.json') //do not load all data. load only what you need.
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
