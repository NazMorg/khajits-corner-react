import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul className='contenedorNavBar'>
                <h1 className='titulo'>
                    <li className='titulo'>
                        <Link className='navTitulo' to="/">The Khajit's Corner</Link>
                    </li>
                </h1>
                <li className='nav-item'>
                    <Link className='navLink' to={`/category/comida`}>Comida</Link>
                </li>
                <li className='nav-item'>
                    <Link className='navLink' to={`/category/bebida`}>Bebida</Link>
                </li>
                <li className='nav-item'>
                    <Link className='navLink' to={`/category/ingredientes`}>Ingredientes</Link>
                </li>
                <li className='nav-item'>
                    <Link className='navLink' to={`/category/varios`}>Varios</Link>
                </li>
                <li className='nav-item'>
                    <Link to={`/cart`}><CartWidget /></Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;