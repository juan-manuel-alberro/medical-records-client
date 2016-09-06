import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    let styles = {
      marginBottom: 0
    };
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={styles}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/home">Lic. Melisa Pini</Link>
        </div>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
                <li><Link to="dashboard" activeClassName="active">Dashboard</Link></li>
                <li><Link to="patients" activeClassName="active">Pacientes</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

export default Navigation;
