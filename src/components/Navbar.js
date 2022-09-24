import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-info">
      <div className="container-fluid" id="logo">
        <Link to="/">Gasti Shop</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" id="cate1">
            <Link to="/category/1">Categoria 1   </Link>
            </li>
            <li class="nav-item" id="cate2">
              <Link to="/category/2">Categoria 2   </Link>
            </li>
            <li class="nav-item" id="cate3">
            <Link to="/category/3">Categoria 3   </Link>
            </li>
          </ul>
        </div>
        <div class="justify-content-right" >
          <Link to="/Cart"><FaShoppingCart/></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar