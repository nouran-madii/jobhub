// import React from 'react';
// import Home from './Components/Home/Home';
// import Layout from './Components/Layout/Layout';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import NotFound from './Components/NotFound/NotFound';
// import Login from './Components/Login/Login';
// import ForgetPassword from './Components/ForgetPassword/ForgetPassword';


// let routers = createBrowserRouter([
//   {path:'/' , element:<Layout/> ,
//     children:[
//     {index:true , element:<Home/>},
    
//     {path:'*' , element:<NotFound/>}
//   ]},
//   {path: 'login', element: <Login/>},
//   {path: 'forgetPassword', element: <ForgetPassword/>}
// ])

// export default function App() {
//   return <RouterProvider router={routers}/>
// }

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import SignUp from './Components/SignUp/SignUp';

let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'forgetPassword', element: <ForgetPassword /> },
  { path: 'signUp', element: <SignUp/> },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
