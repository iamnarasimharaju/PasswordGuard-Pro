import { Bell, Moon, ShieldCheck, UserCircle2 } from "lucide-react";

function Navbar({ title }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>{title}</h1>
        <p>Enterprise Password Security Suite</p>
      </div>

      <div className="navbar-right">

        <div className="security-status">
          <ShieldCheck size={18} />
          <span>Secure</span>
        </div>

        <button className="icon-button">
          <Bell size={20} />
        </button>

        <button className="icon-button">
          <Moon size={20} />
        </button>

        <div className="profile">
          <UserCircle2 size={34} />
        </div>

      </div>
    </header>
  );
}

export default Navbar;