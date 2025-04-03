import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError('Пароль должен содержать минимум 8 символов, включая заглавную букву, цифру и специальный символ.');
      return;
    }

    setPasswordError('');
    setLoginError('');

    try {
      console.log(localStorage.getItem("user"))
      navigate('/profile');
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      setLoginError('Произошла ошибка при попытке входа. Попробуйте позже.');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="form-heading">Вход</h2>
      <form onSubmit={handleSubmit} className="login-form">
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

        {loginError && <p className="error-message">{loginError}</p>}

        <button type="submit" className="submit-btn">Войти</button>
      </form>

      <div className="register-link">
        <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
      </div>

      <button onClick={() => navigate(-1)} className="back-btn">Назад</button>
    </div>
  );
};

export default Login;
