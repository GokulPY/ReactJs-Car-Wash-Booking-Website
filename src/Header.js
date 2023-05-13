import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="head1">
        <Link to="/login"></Link>
      </div>

      <div className="head2">
        <Link to="/dashboard"></Link>
      </div>

      <div className="head3">
        <Link to="/application"></Link>
      </div>

      <div className="head4">
        <Link to="/vechiletype"></Link>
      </div>

      <div className="head5">
        <Link to="/servicelist"></Link>
      </div>

      <div className="head5">
        <Link to="/serviceadd"></Link>
      </div>
      <Outlet />
    </>
  )
};

export {Header};