import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="user">
              <Route index element={<List/>}/>
              <Route path=":userID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
              </Route>
            </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
