import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyContainer from './components/MyContainer';
import About from './components/About';
import './i18n';

const App = () => {
  return (
    <Router>
      <div>
        <div data-testid="pg-header">
          <Header />
        </div>
        <main className="container">
          <Routes>
            <Route 
              path="/" 
              element={<div data-testid="pg-container"><MyContainer /></div>} 
            />
            <Route 
              path="/about" 
              element={<div data-testid="pg-about"><About /></div>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
