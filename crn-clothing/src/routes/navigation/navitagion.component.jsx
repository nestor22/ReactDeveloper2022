import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrnLogo } from "../../assets/cron.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const handlerSignOut = async () => {
    await signOut();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <CrnLogo className="logo" />
          </div>
        </Link>
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={handlerSignOut}>
            SIGN OUT{" "}
          </span>
        ) : (
          <Link className="nav-link" to="/sign-in">
            SING IN
          </Link>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
