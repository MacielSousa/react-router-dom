import  React from 'react';
import styles from './Header.module.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

const  Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="/" end>Produtos</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.link} to="contato">Contatos</NavLink>
        </li>
      </ul>
    </nav>
  );

}

export default Header;