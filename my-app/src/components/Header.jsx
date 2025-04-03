import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="navbar">
      <nav className="nav-links">
        <a href="#"><span className="logo">KazLance</span></a>
        <a href="#" className="active">Главная</a>
        <a href="#">Найти работу</a>
        <a href="#">Найти фрилансера</a>
        {user ? (
          <Link to="/profile">Профиль</Link>  // Кнопка профиля, если пользователь авторизован
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
      <button className="Post" onClick={() => openModal("login")}>Выпустить проект</button>
    </header>
  );
};

export default Header;
