import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LoginLogo = ({ logo, brand }) => {
  return (
    <Link
      className="login-brand d-flex align-items-center justify-content-center"
      to={"/"}
    >
      <div className="login-brand-icon">
        <img className="w-100" src={logo} alt={brand} />
      </div>
    </Link>
  );
};

LoginLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
