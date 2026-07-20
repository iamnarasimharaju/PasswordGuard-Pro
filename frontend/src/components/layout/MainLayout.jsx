import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Dashboard from "../../pages/Dashboard";
import PasswordAnalyzer from "../../pages/PasswordAnalyzer";
import PasswordGenerator from "../../pages/PasswordGenerator";
import PolicyChecker from "../../pages/PolicyChecker";
import Reports from "../../pages/Reports";
import Settings from "../../pages/Settings";

import "../../styles/layout.css";

function MainLayout() {

  const [currentPage, setCurrentPage] = useState("dashboard");

  const getPageTitle = () => {

    switch (currentPage) {

      case "dashboard":
        return "Dashboard";

      case "analyzer":
        return "Password Analyzer";

      case "generator":
        return "Password Generator";

      case "audit":
        return "Password Audit";

      case "reports":
        return "Reports";

      case "settings":
        return "Settings";

      default:
        return "Dashboard";

    }

  };

  const renderPage = () => {

    switch (currentPage) {

      case "dashboard":
        return <Dashboard />;

      case "analyzer":
        return <PasswordAnalyzer />;

      case "generator":
        return <PasswordGenerator />;

      case "audit":
        return <PolicyChecker />;

      case "reports":
        return <Reports />;

      case "settings":
        return <Settings />;

      default:
        return <Dashboard />;

    }

  };

  return (

    <div className="layout">

      <Sidebar
    page={currentPage}
    setPage={setCurrentPage}
/>

      <div className="content-area">

        <Navbar title={getPageTitle()} />

        <main className="main-content">

          {renderPage()}

        </main>

      </div>

    </div>

  );

}

export default MainLayout;