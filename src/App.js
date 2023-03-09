import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Starters from "./pages/Starters";
import MainCourses from "./pages/MainCourses";
import Sections from "./components/Sections";
import Desserts from "./pages/Desserts";
import menu from "./helpers/menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sections />
      <Routes>
        <Route path="/">
          <Route path="" element={<Starters starters={menu[0].starters} />} />
          <Route
            path="main-courses"
            element={<MainCourses mainCourses={menu[1].main} />}
          />
          <Route
            path="desserts"
            element={<Desserts desserts={menu[2].desserts} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
