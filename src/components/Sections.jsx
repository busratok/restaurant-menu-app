import { NavLink, Outlet } from "react-router-dom";
import "../css/Sections.css";

const Sections = () => {
  return (
    <div className="sections">
      <NavLink
        className={({ isActive }) => (isActive ? "btn active" : "btn")}
        to=""

        // onClick={() => navigate(`/`, { state: menu[0] })}
      >
        Starters
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "btn active" : "btn")}
        to="main-courses"
        // onClick={() => navigate(`main-courses`, { state: menu[1] })}
      >
        Main Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "btn active" : "btn")}
        to="desserts"

        // onClick={() => navigate(`desserts`, { state: menu[2] })}
      >
        Desserts
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Sections;
