import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PhotographyServices } from './pages/PhotographyServices';
import { ProductPhotography } from './pages/ProductPhotography';
import { ClothingPhotography } from './pages/ClothingPhotography';
import { StudioHire } from './pages/StudioHire';
import { RetouchingServices } from './pages/RetouchingServices';

const App: React.FC = () => {
  return (
    <Router>
      <div className="antialiased w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/photography" element={<PhotographyServices />} />
            <Route path="/services/product" element={<ProductPhotography />} />
            <Route path="/services/clothing" element={<ClothingPhotography />} />
            <Route path="/services/retouching" element={<RetouchingServices />} />
            <Route path="/studio-hire" element={<StudioHire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;