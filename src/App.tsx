import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './layouts/Layout.tsx'
import { Home } from './pages/Home.tsx';
import {Settings} from './pages/Settings.tsx';
import {MyReserve} from './pages/MyReserve.tsx';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      }/>
      <Route path="/myreserve" element={
        <Layout>
          <MyReserve />
        </Layout>
      }/>
      <Route path="/settings" element={
        <Layout>
          <Settings />
        </Layout>
      }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
