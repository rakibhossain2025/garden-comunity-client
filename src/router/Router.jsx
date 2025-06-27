import { createBrowserRouter, Link } from "react-router";
import App from "../App";
import signinPage from "../Pages/signinPage";
import SignUpPage from "../Pages/SignUpPage";
import Home from "../Pages/Home";
import Tips from "../Components/Tips/Tips";
import Error from "../Pages/Error";
import GardenTip from "../Components/GardenTipForm/GardenTip";
import Private from "../Private/Private";
import TipDetails from "../Private/PrivatePage/TipDetails";
import Loading from "../Components/Loading";
import Gardeners from "../Components/Gardeners/Gardeners";
import MyTips from "../Private/PrivatePage/MyTips/MyTips";
import UpdateMyTips from "../Private/PrivatePage/MyTips/UpdateMyTips";
import Faq from "../Pages/Faq";
import Dashboard from "../Private/DashBord/Dashbord";
import EntryPoint from "../Private/DashBord/EntryPoint";
import AboutUs from "../Pages/AboutUs";


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
      Component: Home
    },
    {
      path: '/explore-gardeners',
      Component: Gardeners
    },
    {
      path: '/browse-tips',

      Component: Tips
    },
    {
      path: '/tip-details/:id',
      element: <Private><TipDetails /></Private>
    },
    {
      path: '/My-tips/',
      element: <Private><MyTips /></Private>
    },
    {
      path: '/My-tip/update/:id',
      hydrateFallbackElement: <Loading />,
      loader: ({ params }) => {
        return fetch(`https://assignment-10-server-virid-theta.vercel.app/tips/id/${params.id}`)
      },
      element: <Private><UpdateMyTips /></Private>
    },
    {
      path: '/about-us',
      Component: AboutUs
    },
    {
      path: '/faq',
      Component: Faq
    },
    {
      path: '/signin',
      Component: signinPage
    },
    {
      path: '/signup',
      Component: SignUpPage
    },
  ]
}, {
  path: 'dashboard',
  Component: Dashboard,
  children: [
    {
      index: true,
      Component: EntryPoint
    }, {
      path: 'share-tip',
      element: <Private><GardenTip /></Private>
    },
  ]

},
{ path: "*", element: <Error /> }
])