import Home from "./routes/home/home.component";
import {  Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navitagion.component";
import Authentication from "./routes/authentication/authentication.component";

const shop = () => {
  return <div>i am a shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<shop />} />
        <Route path="sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
