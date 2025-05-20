import { createBrowserRouter } from "react-router";
import App from "../App";
import signinPage from "../Pages/signinPage";
import SignUpPage from "../Pages/SignUpPage";

export const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [
    { path: '/signin', Component: signinPage },
    { path: '/signup', Component: SignUpPage },
  ]

}])