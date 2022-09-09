import Directory from "./components/directory/directory.componet";
import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";

const Navitagion = () => {
  retur(
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const shop = () => {
  return <div>i am a shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" elements={<Navitagion />}>
        <Route index element={<Home />} />
        <Route path="shop" elements={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
