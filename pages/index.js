/** @format */

import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="app" id="media">
        <Navbar />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </>
  );
}
