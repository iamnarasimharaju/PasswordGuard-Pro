import { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {

  const [notifications, setNotifications] = useState([

    {
      id: 1,
      title: "Welcome",
      message: "Welcome to PasswordGuard Pro.",
      read: false,
    },

  ]);

  function addNotification(title, message) {

    setNotifications(prev => [

      {
        id: Date.now(),
        title,
        message,
        read: false,
      },

      ...prev,

    ]);

  }

  function markAllRead() {

    setNotifications(prev =>
      prev.map(item => ({
        ...item,
        read: true,
      }))
    );

  }

  return (

    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllRead,
      }}
    >

      {children}

    </NotificationContext.Provider>

  );

}