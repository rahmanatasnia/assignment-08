import React from 'react';

import { 
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import FullApps from '../Pages/FullApps/FullApps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children: [
        {
            index: true,
            loader:() =>fetch('/appData.json'),
            path: "/",
            Component: Home,
        },
        {
          path:'/apps',
          Component:FullApps,
        }
    ]
  },
]);