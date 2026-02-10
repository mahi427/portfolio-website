// src/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ServicesPage from './pages/ServicesPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;