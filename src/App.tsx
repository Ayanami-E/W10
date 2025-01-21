import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MyContainer from './components/MyContainer'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
