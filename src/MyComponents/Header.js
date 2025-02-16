import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Header(props) {   //props = js object pass throw parents components to child component
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
   <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
           
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs">
              Contact us
            </Link>
          </li>
          
          <li className="nav-item">
            <button className="nav-link disabled" aria-disabled="true">
              Shubham-Todo
            </button>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
      

  )

}


Header.propTypes = {
    title: PropTypes.string,   // types of props
    searchBar:PropTypes.bool.isRequired    // proptypes required only for an string value not a other datatypes
}
