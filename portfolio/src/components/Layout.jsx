import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cursor from "./Cursor";
import { globalCSS } from "../styles";

export default function Layout() {
  return (
    <>
      <style>{globalCSS}</style>
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
