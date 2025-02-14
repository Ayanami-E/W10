import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyContainer from './components/MyContainer';
import About from './components/About';
import './i18n';
import { Suspense } from 'react';

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
