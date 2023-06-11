import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Layout } from "antd";
import './App.css'
import SideBar from './components/SideBar'
import HeaderBar from './components/HeaderBar';

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: "100vh", margin: 0 }}>
        <Router>
        <HeaderBar/>
        <Layout>
          <SideBar/>
        </Layout>
        </Router>
      </Layout>
    </QueryClientProvider>
  )
}

export default App
