import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUsername(parsedUser.username);
      setEmail(parsedUser.email);
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = { username, email, password };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setMessage('Профиль обновлен!');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return <p>Загрузка...</p>;

  return (
    <div className="profile-container">
      <h2>Редактировать профиль</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            required
          />
        </div>

        <button type="submit" className="submit-btn">Сохранить изменения</button>
      </form>

      {message && <p className="message">{message}</p>}

      <button onClick={handleLogout} className="logout-btn">Выход</button>
    </div>
  );
};

export default Profile;
