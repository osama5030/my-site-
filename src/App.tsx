import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage'; // استيراد صفحة الأسئلة الشائعة

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} /> {/* مسار الأسئلة الشائعة */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
