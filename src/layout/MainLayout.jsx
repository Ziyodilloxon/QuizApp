// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://www.youtube.com/" target="_blank">
          Youtube
        </a>{" "}
        |
        <a href="https://www.github.com/Ziyodilloxon" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
