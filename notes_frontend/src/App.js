import React, { useState, useEffect } from 'react';
import './design-system.css';
import './App.css';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [screen, setScreen] = useState('splash');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const goToSignIn = () => setScreen('signin');

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: 0, background: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>
      <main>
        {screen === 'splash' ? (
          <Splash onGetStarted={goToSignIn} />
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}

export default App;
