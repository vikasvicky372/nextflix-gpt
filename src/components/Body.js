import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


const Body = () => {

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={routerConfig} />;
};

const App = () => (
  <Provider store={appStore}>
    <Body/>
  </Provider>
);

export default App;
