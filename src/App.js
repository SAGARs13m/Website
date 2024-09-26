import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/home';
import About from '././pages/About/about';
import Contact from '././pages/Contact/contact';
import Courses from './pages/Courses/courses';
import News from '././pages/News/news';
//import Test from './pages/Test/test';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          {/* Add more routes here as needed */}
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

