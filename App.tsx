import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { MailApp } from './components/MailApp';

const App: React.FC = () => {
  const [hasEnteredApp, setHasEnteredApp] = useState(false);

  if (hasEnteredApp) {
    return <MailApp onReturnHome={() => setHasEnteredApp(false)} />;
  }

  return <LandingPage onEnter={() => setHasEnteredApp(true)} />;
};

export default App;