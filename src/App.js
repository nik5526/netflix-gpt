import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import Body from "./Components/Body";
import SignIn from "./Components/SignIn";
import Browse from "./Components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, 
    children: [
      { path: "/", element: <SignIn /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
