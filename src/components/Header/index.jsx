import styles from "./index.module.css"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export const Header = ({userName = "Admin Cuidate"}) => {
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-dark  topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* Sección Mensajes */}
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className={`nav-item ${styles.anotherSection}`}>
            <Badge badgeContent={5} color="primary">
              <MailIcon color="action" />
            </Badge>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          {/* <!-- Nav Item - User Information --> */}
          <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i
                className={`fas fa-user ${styles.userLogo}`}
              ></i>
              <span className="text-gray-600 small text-center">
                {userName}
              </span>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};
