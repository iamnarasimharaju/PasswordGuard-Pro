import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PasswordAnalyzer from "../../pages/PasswordAnalyzer";

import "../../styles/layout.css";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content-area">
        <Navbar />

        <main className="main-content">
          <PasswordAnalyzer />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;