import React from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      // <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Apna Cart
          </a>
        </div>
      </nav>
      // </nav>
    );
  }
}

export default Navbar;
