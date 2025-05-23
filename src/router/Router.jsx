import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import signinPage from "../Pages/signinPage";
import SignUpPage from "../Pages/SignUpPage";
import Home from "../Pages/Home";
import Tips from "../Components/Tips/Tips";
import Error from "../Pages/Error";
import GardenTip from "../Components/GardenTipForm/GardenTip";
import Private from "../Private/Private";
import MyTips from "../Private/PrivatePage/MyTips";
import TipDetails from "../Private/PrivatePage/TipDetails";
import Loading from "../Components/Loading";
import Gardeners from "../Components/Gardeners/Gardeners";


// #52f757 dark text color 
// #003401 light text color 
// #ffffff light bg color 
// #000000 dark bg color 

export const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [
    {
      path: '/',
      hydrateFallbackElement: <Loading />,
      loader: async () => {
        const response = await fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardeners");
        const data = await response.json();
        return data
      },
      Component: Home
    },
    {
      path: '/share-a-garden-tip', element: <Private><GardenTip /></Private>
    },
    {
      path: '/explore-gardeners',
      hydrateFallbackElement: <Loading />,
      loader: async () => {
        const response = await fetch("https://assignment-10-server-virid-theta.vercel.app/active-gardeners");
        const data = await response.json();
        return data
      },
      Component: Gardeners
    },
    {
      path: '/browse-tips',
      hydrateFallbackElement: <Loading />,
      loader: async () => {
        const response = await fetch('https://assignment-10-server-virid-theta.vercel.app/active-gardeners')
        const data = await response.json();
        return data
      },
      Component: Tips
    },
    { path: '/tip-details/:id', element: <Private><TipDetails /></Private> },
    { path: '/My-tips', element: <Private><MyTips /></Private> },
    { path: '/signin', Component: signinPage },
    { path: '/signup', Component: SignUpPage },
  ]
},
{ path: "*", element: <Error /> }
])