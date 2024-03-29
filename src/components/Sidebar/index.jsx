import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo.png";
import { NavItem } from "./components/NavItem";
import { useAuth } from "../../context/AuthProvider";

const TITLE = "Dashboard EcommuniCrafts";

export const Sidebar = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {/* <!-- Sidebar --> */}
      
      <ul
        className="navbar-nav bg-gradient-blue sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="E-communiCrafts!" logo={Logo} />        
        {/* <!-- Divider --> */}
        {currentUser && (
          <>
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
          
            <NavItem href="/products" icon="fa-box" name="Productos"/>
            <NavItem href="/users" icon="fa-user" name="Usuarios"/>
            <NavItem href="/calendar" icon="fa-calendar" name="Calendario"/>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
          </>
        )}
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};