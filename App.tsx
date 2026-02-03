
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import AboutContact from './pages/AboutContact';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutContact />} />
        </Routes>
      </Layout>
      <AIConcierge />
    </HashRouter>
  );
};

export default App;
