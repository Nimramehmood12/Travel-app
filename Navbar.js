import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Epic Pathfinders</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <li>
          <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
