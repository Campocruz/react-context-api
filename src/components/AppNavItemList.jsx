import { NavLink } from "react-router"
export default function AppNavItemList({ link }) {

  return (
    <>
      <li className="nav-item ">
        <NavLink className="nav-link active" aria-current={link.link} to={link.path}>
          <i className={link.iconClass}>  {link.text}</i>
        </NavLink>
      </li>
    </>
  )
}