import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
      <aside className="left col-span-3">
        <LeftNavbar>
        </LeftNavbar>
      </aside>

      <section className="col-span-6">
        <Outlet></Outlet>
      </section>

      <aside className="col-span-3">
        <RightNav>
         
        </RightNav>
      </aside>

      </main>
    </div>
  );
};

export default Home;
