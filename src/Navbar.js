import { Link } from "react-router-dom";

 function Navbar(){

    return(
        <div className="nav-container">
        <div>EKart.com</div>
        <div><Link to={"/cart"}>Cart</Link></div>
        </div>
    )
 }

 export default Navbar;