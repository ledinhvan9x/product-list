import { Link, Route } from "react-router-dom";

let menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: true,
  },
];

const Menu = (props) => {
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? "active" : "";
          return (
            <li className={`${active} nav-item`}>
              <Link className="nav-link" to={to}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  let showMenus = (menus) => {
    let result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }

    return result;
  };

  return (
    <div className="App">
      {/* Menu */}
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">{showMenus(menus)}</ul>
      </nav>
      {/* Menu */}
    </div>
  );
};

export default Menu;
