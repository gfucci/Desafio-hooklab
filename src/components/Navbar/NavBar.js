//CSS
import styles from './NavBar.module.css'

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logo}>
            React <span>products</span>
        </NavLink>
        <ul className={styles.link_list}>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/products"  className={({ isActive }) => isActive ? styles.active : ""}>
                    Produtos
                </NavLink>
            </li>
            <li>
                <NavLink to="/newproduct"  className={({ isActive }) => isActive ? styles.active : ""}>
                    Cadastrar produto
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"  className={({ isActive }) => isActive ? styles.active : ""}>
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar