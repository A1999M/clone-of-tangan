import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container_Navbar">
              <ul className="wrapper_nav">
                <li className="mai_page">
                  <NavLink className="items_nav">TANGAN</NavLink>
                </li>
                <li>
                  <NavLink className="items_nav">REFLEXOLOGIE</NavLink>
                </li>
                <li>
                  <NavLink className="items_nav">MASSAGE</NavLink>
                </li>
                <li>
                  <NavLink className="items_nav">PHYSIOSCAN</NavLink>
                </li>
                <li>
                  <NavLink className="items_nav">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
