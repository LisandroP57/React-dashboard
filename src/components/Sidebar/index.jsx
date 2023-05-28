import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo.png";
import { NavItem } from "./components/NavItem";

const TITLE = "Cuidate dashboard";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="Cuidate!" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>{TITLE}</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Administrar</div>

        {/* <!-- Nav Items --> */}
       
        <NavItem href="/" icon="fa-box" name="Productos"/>
        <NavItem href="/" icon="fa-user" name="Usuarios"/>
        <NavItem href="/" icon="fa-gear" name="Configuracion"/>
        <NavItem href="/" icon="fa-calendar" name="Calendario"/>
        <NavItem href="/" icon="fa-percent" name="Estadisticas"/>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
