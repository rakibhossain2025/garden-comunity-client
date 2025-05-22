import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import signinPage from "../Pages/signinPage";
import SignUpPage from "../Pages/SignUpPage";
import Home from "../Pages/Home";
import Tips from "../Components/Tips/Tips";
import Error from "../Pages/Error";
import GardenTip from "../Components/GardenTipForm/GardenTip";

export const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [
    { index: '/', Component: Home },
    { path: '/share-a-garden-tip', Component: GardenTip },
    { path: '/explore-gardeners', Component: signinPage },
    { path: '/browse-tips', Component: Tips },
    { path: '/My-tips', Component: signinPage },
    { path: '/signin', Component: signinPage },
    { path: '/signup', Component: SignUpPage },
  ]
},
{ path: "*", element: <Error /> }
])