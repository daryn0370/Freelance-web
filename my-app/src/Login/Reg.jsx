import React, { useState } from 'react';
import './Reg.css';
import { Link, useNavigate } from 'react-router-dom';

const Reg = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError('Пароль должен содержать минимум 8 символов, включая заглавную букву, цифру и специальный символ.');
      return;
    }

    setPasswordError('');

    try {
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      navigate('/');  // Перенаправление на главную страницу после регистрации
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
    }
  };

  return (
    <div className="registration-form-container">
      <h2 className="form-heading">Регистрация</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя пользователя"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите почту"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <button type="submit" className="submit-btn">Зарегистрироваться</button>
      </form>

      <div className="login-link">
        <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </div>

      <button onClick={() => navigate(-1)} className="back-btn">Назад</button>
    </div>
  );
};

export default Reg;
