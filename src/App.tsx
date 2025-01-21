import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyContainer from './components/MyContainer';
import About from './components/About';
import { Suspense } from 'react';
import './i18n';

const App = () => {
  return (
    <Suspense fallback="loading...">
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MyContainer />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
