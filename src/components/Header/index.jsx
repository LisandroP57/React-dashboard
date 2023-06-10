import styles from "./index.module.css"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React  from 'react';
import Clock from 'react-live-clock';
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

export const Header = ({userName = "Admin Cuidate"}) => {
  const { currentUser, logout } = useAuth();
  const handleLogout = () => logout()
  
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-dark  topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* Sección Mensajes */}
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className={styles.clockContainer}>
            <span className="text-gray-600 small text-center">
              Horario
            </span>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Argentina/Buenos_Aires'} />
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className={`nav-item ${styles.notificationContainer}`}>
            <Badge badgeContent={5} color="primary">
              <MailIcon color="action" />
            </Badge>
            <span className="text-gray-600 small text-center">
              Notificaciones
            </span>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          {/* <!-- Nav Item - User Information --> */}
          {currentUser ? (
            <>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
                <i className={`fas fa-user ${styles.userLogo}`}></i>
                <span className="text-gray-600 small text-center">
                  {currentUser.email}
                </span>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <button className="btn btn-info" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </>
          ) : (
            <>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i className="fa-solid fa-user"></i>
                <Link to="/signin">Login</Link>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i className="fa-solid fa-user-plus"></i>
                <Link to="/signup">Registro</Link>
              </li>
            </>
          )}
          <div className="topbar-divider d-none d-sm-block"></div>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};
