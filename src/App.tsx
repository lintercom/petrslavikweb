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
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const References = lazy(() => import('./pages/References').then(m => ({ default: m.References })));
const ReferenceDetail = lazy(() => import('./pages/ReferenceDetail').then(m => ({ default: m.ReferenceDetail })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogDetail = lazy(() => import('./pages/BlogDetail').then(m => ({ default: m.BlogDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Cookies = lazy(() => import('./pages/Cookies').then(m => ({ default: m.Cookies })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="min-h-screen bg-brand-white pt-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="h-4 w-40 bg-brand-black mb-8 animate-pulse" />
        <div className="h-12 w-full max-w-xl bg-brand-off-white mb-4 animate-pulse" />
        <div className="h-12 w-2/3 max-w-lg bg-brand-off-white animate-pulse" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SpotlightProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sluzby" element={<Services />} />
                <Route path="sluzby/:serviceSlug" element={<ServiceWeb />} />
                <Route path="cenik" element={<Pricing />} />
                <Route path="reference" element={<References />} />
                <Route path="reference/:slug" element={<ReferenceDetail />} />
                <Route path="proces" element={<Process />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
                <Route path="kontakt" element={<Contact />} />
                <Route path="ochrana-osobnich-udaju" element={<Privacy />} />
                <Route path="cookies" element={<Cookies />} />
                <Route path="o-mne" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </SpotlightProvider>
  );
}
