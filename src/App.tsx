import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import './i18n';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <Header />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<div>{t("This is the front page")}</div>} />
            <Route path="/about" element={<div>{t("About")}</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
