import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    // Here you can add your login logic, like sending a request to your backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields and error message after successful submission
    setEmail('');
    setPassword('');
    setError('');

    navigate("/Dashboard");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="register-link">
        <p>Not registered? <Link to="/Registration" className="register-link">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
