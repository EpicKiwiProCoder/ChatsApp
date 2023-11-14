import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { App } from './pages/App';
import { HowPage } from './pages/How';
import { FrontendPage } from './pages/Frontend';
import { BackendPage } from './pages/Backend';
import { EisenPage } from './pages/Eisen';

let currentPage; let setCurrentPage;

const PageRenderer = () => {
  [currentPage, setCurrentPage] = useState(0);

  switch (currentPage) {
    default:
      return <App />
    case 1:
      return <HowPage />
    case 2:
      return <FrontendPage />
    case 3:
      return <BackendPage />
    case 4:
      return <EisenPage />
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRenderer />
  </React.StrictMode>
);

export { currentPage, setCurrentPage };