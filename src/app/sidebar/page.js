'use client'

import { useState } from "react";
import { Home, List, MessageSquare, User, LogOut } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("Add new");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, link: "/sidebar/dashboard" },
    { name: "Add new", icon: <List size={20} />, link: "/addProperty" },
    { name: "My Properties", icon: <List size={20} />, link: "/myProperty" },
    { name: "Enquiries", icon: <MessageSquare size={20} />, link: "/enquiries" },
    { name: "My Subscriptions", icon: <List size={20} />, link: "/subscriptions" },
  ];

  const accountItems = [
    { name: "My Profile", icon: <User size={20} />, link: "/profile" },
    { name: "Log Out", icon: <LogOut size={20} />, link: "/logout" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-5 flex flex-col">
      <img
        src="https://www.thithithara.com/images/logo/logo.png"
        alt="Logos"
        className="h-16"
      />
      <div className="mt-6">
        <h3 className="text-gray-500 text-sm uppercase">Main</h3>
        <ul className="mt-2 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link} onClick={() => setActive(item.name)}>
                <div
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${
                    active === item.name
                      ? "hover:bg-blue-500 text-gray-700"
                      : "text-gray-700 hover:bg-blue-500 "
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-500 text-sm uppercase">Manage Account</h3>
        <ul className="mt-2 space-y-2">
          {accountItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link} onClick={() => setActive(item.name)}>
                <div
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${
                    active === item.name
                      ? "bg-red-500 text-white"
                      : "text-gray-700 hover:bg-red-500"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
