import { FC } from "react";
import { Filters } from "../models/";
import { useService } from "../context/services";

type NavbarProps = {
  items: Filters[];
};

const Navbar: FC<NavbarProps> = ({ items }) => {
  const { setTagFilter } = useService();
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-info">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {items.length > 0 ? (
            items.map((item) => (
              <li
                key={item.id}
                className="nav-item"
                onClick={() => setTagFilter(item.category)}
              >
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/"
                  onClick={onClick}
                >
                  {item.name}
                </a>
              </li>
            ))
          ) : (
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#!">
                Home
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
