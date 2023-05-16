import React from "react";

export const Header = ({ add }) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo ">
            USERLIST
          </a>
          <ul className="right">
            <li>
              <button className="waves-effect waves-light btn" onClick={()=>add()}>ADD</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
