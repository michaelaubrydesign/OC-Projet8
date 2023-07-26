import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
