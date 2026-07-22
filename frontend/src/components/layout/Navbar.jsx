import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

import {
  Bell,
  Moon,
  ShieldCheck,
  UserCircle2,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { useNotification } from "../../hooks/useNotification";

function Navbar({ title }) {

  const { user, logout } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const {

    notifications,

    markAllRead,

  } = useNotification();

  const [showProfile, setShowProfile] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount =
    notifications.filter(n => !n.read).length;

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

        <div className="notification-container">

          <button

            className="icon-button"

            onClick={() =>
              setShowNotifications(!showNotifications)
            }

          >

            <Bell size={20} />

            {

              unreadCount > 0 && (

                <span className="notification-badge">

                  {unreadCount}

                </span>

              )

            }

          </button>

          {

            showNotifications && (

              <div className="notification-dropdown">

                <div className="notification-header">

                  <h4>Notifications</h4>

                  <button
                    onClick={markAllRead}
                  >
                    Mark all read
                  </button>

                </div>

                {

                  notifications.length === 0 ?

                  (

                    <p className="empty-text">

                      No notifications

                    </p>

                  )

                  :

                  notifications.map(item => (

                    <div
                      key={item.id}
                      className={`notification-item ${
                        item.read ? "read" : ""
                      }`}
                    >

                      <strong>{item.title}</strong>

                      <p>{item.message}</p>

                    </div>

                  ))

                }

              </div>

            )

          }

        </div>

        <button
          className="icon-button"
          onClick={toggleTheme}
          title={`Switch to ${
            theme === "dark"
              ? "Light"
              : "Dark"
          } Mode`}
        >

          <Moon size={20} />

        </button>

        <div className="profile-container">

          <button

            className="profile-button"

            onClick={() =>
              setShowProfile(!showProfile)
            }

          >

            <UserCircle2 size={34} />

          </button>

          {

            showProfile && (

              <div className="profile-dropdown">

                <h4>{user?.name}</h4>

                <p>{user?.email}</p>

                <hr />

                <button

                  className="logout-btn"

                  onClick={logout}

                >

                  <LogOut size={18} />

                  Logout

                </button>

              </div>

            )

          }

        </div>

      </div>

    </header>

  );

}

export default Navbar;