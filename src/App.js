import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import { Header } from "./components/Header";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}
/*struture
header
body
 --maincontainer
    ---buttonFilter
    ---videocontainer
     ---videcCard
   
  --sidebar
     --menu items
 


*/
export default App;
