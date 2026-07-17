import {
  LayoutDashboard,
  ShieldCheck,
  KeyRound,
  FileSearch,
  FileText,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>PasswordGuard</h2>
        <span>Enterprise Security</span>
      </div>

      <nav className="sidebar-menu">

        <div className="menu-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="menu-item">
          <ShieldCheck size={20} />
          <span>Password Analyzer</span>
        </div>

        <div className="menu-item">
          <KeyRound size={20} />
          <span>Password Generator</span>
        </div>

        <div className="menu-item">
          <FileSearch size={20} />
          <span>Password Audit</span>
        </div>

        <div className="menu-item">
          <FileText size={20} />
          <span>Reports</span>
        </div>

        <div className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;