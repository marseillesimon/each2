import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = '/.netlify/functions/x-login';
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('login') === 'success') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {!loggedIn ? (
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 30px',
            fontSize: '20px',
            background: '#1da1f2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Login with X.com
        </button>
      ) : (
        <h1>hello world</h1>
      )}
    </div>
  );
}

export default App;