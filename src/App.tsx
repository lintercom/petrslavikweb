/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { SpotlightProvider } from './components/providers/SpotlightProvider';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const ServiceWeb = lazy(() => import('./pages/ServiceWeb').then(m => ({ default: m.ServiceWeb })));
const ServiceEshop = lazy(() => import('./pages/ServiceEshop').then(m => ({ default: m.ServiceEshop })));
const ServiceApp = lazy(() => import('./pages/ServiceApp').then(m => ({ default: m.ServiceApp })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const References = lazy(() => import('./pages/References').then(m => ({ default: m.References })));
const ReferenceDetail = lazy(() => import('./pages/ReferenceDetail').then(m => ({ default: m.ReferenceDetail })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogDetail = lazy(() => import('./pages/BlogDetail').then(m => ({ default: m.BlogDetail })));
const IntegrationPohoda = lazy(() => import('./pages/IntegrationPohoda').then(m => ({ default: m.IntegrationPohoda })));
const PlatformShoptet = lazy(() => import('./pages/PlatformShoptet').then(m => ({ default: m.PlatformShoptet })));
const PlatformUpgates = lazy(() => import('./pages/PlatformUpgates').then(m => ({ default: m.PlatformUpgates })));
const PlatformWooCommerce = lazy(() => import('./pages/PlatformWooCommerce').then(m => ({ default: m.PlatformWooCommerce })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Cookies = lazy(() => import('./pages/Cookies').then(m => ({ default: m.Cookies })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));

export default function App() {
  return (
    <SpotlightProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sluzby" element={<Services />} />
                <Route path="sluzby/webove-stranky" element={<ServiceWeb />} />
                <Route path="sluzby/e-shop" element={<ServiceEshop />} />
                <Route path="sluzby/webove-aplikace" element={<ServiceApp />} />
                <Route path="cenik" element={<Pricing />} />
                <Route path="reference" element={<References />} />
                <Route path="reference/:slug" element={<ReferenceDetail />} />
                <Route path="proces" element={<Process />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
                <Route path="integrace/pohoda" element={<IntegrationPohoda />} />
                <Route path="platformy/shoptet" element={<PlatformShoptet />} />
                <Route path="platformy/upgates" element={<PlatformUpgates />} />
                <Route path="platformy/woocommerce" element={<PlatformWooCommerce />} />
                <Route path="kontakt" element={<Contact />} />
                <Route path="ochrana-osobnich-udaju" element={<Privacy />} />
                <Route path="cookies" element={<Cookies />} />
                <Route path="o-mne" element={<About />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </SpotlightProvider>
  );
}
