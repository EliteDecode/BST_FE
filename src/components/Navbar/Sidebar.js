import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../utils/context";
import { sublinks } from "../../utils/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper z-50 show" : "sidebar-wrapper"
      }`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <Link to={`/${page}`} onClick={closeSidebar}>
                  <h4 className="mb-2 font-bold">{page}</h4>
                </Link>
                <div className="sidebar-sublinks" onClick={closeSidebar}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Link to={`/${url}`}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
