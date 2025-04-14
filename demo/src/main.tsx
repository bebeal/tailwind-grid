import React from 'react';
import ReactDOM from 'react-dom/client';
import { DotDemo, DotMediumDemo, DotSmallDemo, GridDemo, GridMediumDemo, GridSmallDemo } from './Demos';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-[#2a2a2a] flex flex-col gap-0 w-full">
      <GridDemo />
      <GridMediumDemo />
      <GridSmallDemo />
      <DotDemo />
      <DotMediumDemo />
      <DotSmallDemo />
    </div>
  </React.StrictMode>
);
