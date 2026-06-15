import {createBrowserRouter } from "react-router-dom"

import {Home} from "./Home.jsx"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
   {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default router;