import React from "react";

export const Header = ({ setAddUsers }) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo ">
            USERLIST
          </a>
          <ul className="right">
            <li>
              <button className="waves-effect waves-light btn" onClick={()=>setAddUsers(prev => prev + 10)}>ADD</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
