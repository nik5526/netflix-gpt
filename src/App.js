import {RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";

import SignIn from "./Components/SignIn";
import Browse from "./Components/Browse";

function App() {

  const appRouter = createBrowserRouter([{
    path : "/",
    element : <SignIn/>,
  },
  {
    path : "/browse",
    element : <Browse/>,
  }
])

  return (
    <div><RouterProvider router= {appRouter} /></div>

  );
}

export default App;
