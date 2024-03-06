import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.backgroundColor} bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">{props.title}</a> {/* Added 'text-white' class */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          {props.searchBar ? 
            <form className="d-flex ml-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> 
            : ""}  
        </div>  
      </div>
    </nav>
  );
}

export default Header;

Header.defaultProps = {
  title: "Your title here",
  backgroundColor: "0099FF",
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
  backgroundColor: PropTypes.string,
}


