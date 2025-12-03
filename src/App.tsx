import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const PhotographyServices = lazy(() => import('./pages/PhotographyServices').then(module => ({ default: module.PhotographyServices })));
const ProductPhotography = lazy(() => import('./pages/ProductPhotography').then(module => ({ default: module.ProductPhotography })));
const ClothingPhotography = lazy(() => import('./pages/ClothingPhotography').then(module => ({ default: module.ClothingPhotography })));
const RetouchingServices = lazy(() => import('./pages/RetouchingServices').then(module => ({ default: module.RetouchingServices })));
const StudioHire = lazy(() => import('./pages/StudioHire').then(module => ({ default: module.StudioHire })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const DirectoryPage = lazy(() => import('./pages/site/DirectoryPage').then(module => ({ default: module.DirectoryPage })));
const ServicesPage = lazy(() => import('./pages/site/ServicesPage').then(module => ({ default: module.ServicesPage })));

const BookingPage = lazy(() => import('./pages/site/BookingPage').then(module => ({ default: module.BookingPage })));

// Dashboard
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout').then(module => ({ default: module.DashboardLayout })));
const OverviewPage = lazy(() => import('./pages/dashboard/OverviewPage').then(module => ({ default: module.OverviewPage })));
const SponsorsPage = lazy(() => import('./pages/dashboard/SponsorsPage').then(module => ({ default: module.SponsorsPage })));
const EventDetailPage = lazy(() => import('./pages/dashboard/EventDetailPage').then(module => ({ default: module.EventDetailPage })));

// Wrapper for Public Site Layout (Navbar + Footer)
const PublicLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="antialiased w-full overflow-x-hidden">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
              <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
              <Route path="/services/photography" element={<PublicLayout><PhotographyServices /></PublicLayout>} />
              <Route path="/services/product" element={<PublicLayout><ProductPhotography /></PublicLayout>} />
              <Route path="/services/clothing" element={<PublicLayout><ClothingPhotography /></PublicLayout>} />
              <Route path="/services/retouching" element={<PublicLayout><RetouchingServices /></PublicLayout>} />
              <Route path="/studio-hire" element={<PublicLayout><StudioHire /></PublicLayout>} />
              <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
              <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
              <Route path="/directory" element={<PublicLayout><DirectoryPage /></PublicLayout>} />
              
              {/* Booking Wizard (No Header/Footer) */}
              <Route path="/start-project" element={<BookingPage />} />

              {/* Dashboard Routes (Protected) */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<OverviewPage />} />
                <Route path="sponsors" element={<SponsorsPage />} />
                <Route path="events" element={<OverviewPage />} /> {/* Placeholder */}
                <Route path="events/:id" element={<EventDetailPage />} />
                <Route path="events/:id/timeline" element={<EventDetailPage />} /> {/* Reusing for demo */}
                <Route path="events/:id/logistics" element={<EventDetailPage />} />
                <Route path="finance" element={<OverviewPage />} />
                <Route path="projects" element={<OverviewPage />} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;