import {
  LayoutDashboard,
  ShieldCheck,
  KeyRound,
  FileSearch,
  ShieldAlert,
  FileText,
  Settings,
} from "lucide-react";

function Sidebar({ page, setPage }) {

  const menu = [

    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      id: "analyzer",
      label: "Password Analyzer",
      icon: ShieldCheck,
    },

    {
      id: "generator",
      label: "Password Generator",
      icon: KeyRound,
    },

    {
      id: "audit",
      label: "Password Audit",
      icon: FileSearch,
    },

    {
      id: "breach",
      label: "Breach Checker",
      icon: ShieldAlert,
    },

    {
      id: "reports",
      label: "Reports",
      icon: FileText,
    },

    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },

  ];

  <div className="sidebar-footer">

  <p>PasswordGuard Pro</p>

  <span>Version 1.0</span>

  <small>© 2026 Narasimha Raju</small>

</div>

  return (

    <aside className="sidebar">

      <div className="sidebar-logo">

        <h2>PasswordGuard</h2>

        <span>Enterprise Security</span>

      </div>

      <nav className="sidebar-menu">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className={`menu-item ${
                page === item.id ? "active" : ""
              }`}
              onClick={() => setPage(item.id)}
            >

              <Icon size={20} />

              <span>{item.label}</span>

            </div>

          );

        })}

      </nav>

    </aside>

  );

}

export default Sidebar;