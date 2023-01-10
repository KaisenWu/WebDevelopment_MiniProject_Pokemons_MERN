import React from 'react'
function Header({title}){
    return (
        <div className="container">
          <nav className="navbar sticky-top navbar-light bg-dark">
            <h1 className="navbar-brand text-light">{title}</h1>
          </nav>
        </div>
      );
}
export default Header;