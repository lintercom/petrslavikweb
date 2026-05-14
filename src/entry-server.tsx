import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { SpotlightProvider } from './components/providers/SpotlightProvider';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceWeb } from './pages/ServiceWeb';
import { Pricing } from './pages/Pricing';
import { References } from './pages/References';
import { ReferenceDetail } from './pages/ReferenceDetail';
import { Process } from './pages/Process';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function StaticApp({ path }: { path: string }) {
  return (
    <SpotlightProvider>
      <MemoryRouter initialEntries={[path]}>
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
      </MemoryRouter>
    </SpotlightProvider>
  );
}

export function renderRoute(path: string) {
  const helmetContext = {} as { helmet?: HelmetServerState };
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticApp path={path} />
    </HelmetProvider>,
  );

  return {
    html,
    scripts: helmetContext.helmet?.script.toString() ?? '',
  };
}
