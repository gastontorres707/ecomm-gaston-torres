import CartWidget from "../components/CartWidget.js"
import {Link} from "react-router-dom";


const Navbar=()=>{
    return(
        <>
        < nav className="navbar navbar-expand-lg bg-info" id="botonera">
       
        <div className="container-fluid me-4" id="logo"><Link to="/" style={{textDecoration:"none"}}>Tech-Shop ►</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav" >
        <li className="nav-item" id="cate1">
          <Link to="/category/1">TECLADOS USB</Link>
        </li>
        <li className="nav-item" id="cate2">
        <Link to="/category/2">TECLADOS BLUETOOTH</Link>
        </li>
        <li className="nav-item" id="cate3">
        <Link to="/category/3">TECLADOS GAMERS</Link>
        </li>
      </ul>
      </div>
    <CartWidget/>
    </div>
 
</nav>

    
        </>
    )
}
export default Navbar;