/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Download } from './pages/Download';
import { GitHub } from './pages/GitHub';
import { Docs } from './pages/Docs';
import { Architecture } from './pages/docs/Architecture';
import { AndroidApp } from './pages/docs/AndroidApp';
import { MLPipeline } from './pages/docs/MLPipeline';
import { ApiDocs } from './pages/ApiDocs';
import { ApiPlayground } from './pages/ApiPlayground';
import { About } from './pages/About';
import { Security } from './pages/Security';
import { Releases } from './pages/Releases';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/download" element={<Download />} />
        <Route path="/github" element={<GitHub />} />
        
        {/* Documentation Routes */}
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/architecture" element={<Architecture />} />
        <Route path="/docs/android" element={<AndroidApp />} />
        <Route path="/docs/ml" element={<MLPipeline />} />
        <Route path="/docs/api" element={<ApiDocs />} />
        
        <Route path="/api" element={<ApiPlayground />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/releases" element={<Releases />} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
