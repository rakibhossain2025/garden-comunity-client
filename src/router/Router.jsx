import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import signinPage from "../Pages/signinPage";
import SignUpPage from "../Pages/SignUpPage";
import GardenTips from "../Components/GardenTips";
import Home from "../Pages/Home";

export const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [
    { index: '/', Component: Home },
    { path: '/share-a-garden-tip', Component: GardenTips },
    { path: '/explore-gardeners', Component: signinPage },
    { path: '/browse-tips', Component: signinPage },
    { path: '/My-tips', Component: signinPage },
    { path: '/signin', Component: signinPage },
    { path: '/signup', Component: SignUpPage },
  ]
},
{ path: "*", element: <h1>error <Link to='/'>go back </Link></h1> }
])