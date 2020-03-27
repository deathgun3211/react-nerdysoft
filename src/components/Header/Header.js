import React from "react";
import { AppConfigContext, UserContext } from "../../context";
import UserInfo from "../UserInfo/UserInfo";
import "./Header.scss";

const Header = () => {
  return (
    <AppConfigContext.Consumer>
      {allLinks => (
        <UserContext.Consumer>
          {({ user }) => (
            <div className="header">
              <ul className="menu">
                {" "}
                {user &&
                  allLinks &&
                  allLinks[user.role].map(link => (
                    <li key={link.label}>
                      <a href="#">{link.label}</a>
                    </li>
                  ))}
              </ul>
              <UserInfo />
            </div>
          )}
        </UserContext.Consumer>
      )}
    </AppConfigContext.Consumer>
  );
};

export default Header;

