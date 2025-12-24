import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
