import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import './i18n';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <div data-testid="pg-header">
          <Header />
        </div>
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route 
              path="/" 
              element={<div data-testid="pg-container">{t("This is the front page")}</div>} 
            />
            <Route 
              path="/about" 
              element={<div data-testid="pg-about">{t("About")}</div>} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
