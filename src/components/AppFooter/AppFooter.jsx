// Import From React Router
import { Link } from "react-router";

// Import Logo From srs
import logoFooter from '../../assets/logo/logoFooter.png';

// Import Data from srs
import dataFooter from "../../assets/data/dataLayout";

// Import Components From srs
import AppNavLogo from "../AppNavLogo";
import AppNavItemList from "../AppNavItemList";

export default function AppFooter() {

  return (
    <>
      <footer >
        <div className="container-flush bg-body text-body">
          <div className="row justify-content-around align-items-center">
            <div className="col-4">
              <ul className="list-unstyled d-flex justify-content-around me-auto" >
                {
                  dataFooter.map(link => <AppNavItemList key={link.id} link={link} />)
                }
              </ul>
            </div>
            <div className="col-1 p-0">
              <AppNavLogo logo={logoFooter} width="100px" height="80px" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}