import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Layout } from "antd";
import './App.css'
import SideBar from './components/SideBar'
import HeaderBar from './components/HeaderBar';
import ContentBar from './components/ContentBar';
import EditarRegistro from './pages/EditarRegistro';
import EliminarRegistro from './pages/EliminarRegistro';
import NuevoRegistro from './pages/NuevoRegistro';
import VerRegistros from './pages/VerRegistros';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: "100vh", margin: 0 }}>
        <Router>
        <HeaderBar/>
        <Layout>
          <SideBar/>
          <Routes>
          <Route path="/" element={<ContentBar />}>
            <Route index element={<VerRegistros />} />
            <Route path='EditarRegistro' element={<EditarRegistro/>}/>
            <Route path='EliminarRegistro' element={<EliminarRegistro/>}/>
            <Route path='NuevoRegistro' element={<NuevoRegistro/>}/>
          </Route>
          </Routes>
        </Layout>
        </Router>
      </Layout>
    </QueryClientProvider>
  )
}

export default App
