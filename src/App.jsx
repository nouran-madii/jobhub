import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Sign/Login/Login';
import ForgetPassword from './Components/Sign/ForgetPassword/ForgetPassword';
import SignUp from './Components/Sign/SignUp/SignUp';


let routers = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: 'login', element: <Login/> },
  { path: 'forgetPassword', element: <ForgetPassword/> },
  { path: 'signUp', element: <SignUp/> },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
