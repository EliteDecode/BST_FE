import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../utils/context";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Submenu = () => {
  const pagelocation = useLocation();

  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  console.log(pagelocation.pathname);

  return (
    <aside
      className={`  ${isSubmenuOpen ? "submenu show " : "submenu"}`}
      ref={container}
      style={{ zIndex: 10000000, position: "fixed", top: "0" }}>
      <section>
        <Link to={`/${page}`}>
          <h4>{page}</h4>
        </Link>
        <div className={`  submenu-center `}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <React.Fragment key={index}>
                <Link
                  to={`/${url}`}
                  className=" w-full text-[11px] flex items-center">
                  <span> {icon}</span>{" "}
                  <span className="text-[12px]">{label}</span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
