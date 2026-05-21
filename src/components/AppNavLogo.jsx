import { NavLink } from "react-router"

export default function AppNavLog({ logo, width, height }) {

  return (
    <>
      <NavLink className="navbar-brand" to="#">
        <img src={logo} alt="" style={{ width: width }, { height: height }} />
      </NavLink>
    </>
  )
}