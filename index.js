import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <img src="https://enuncia.global/assets/img/logo.svg" alt="Enuncia Global" height="80"/>
      <h1>Welcome to the Enuncia Project Portal</h1>
      <p>Login system and dashboard coming soon.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
