import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import AboutScreen from './components/screens/AboutScreen'
import ContactScreen from './components/screens/ContactScreen'
import GDPRScreen from './components/screens/GDPRScreen'
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen'
import NoMatchScreen from './components/screens/NoMatchScreen'
import RegisterScreen from './components/screens/RegisterScreen'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/auth/login" element={<LoginScreen />} />
          <Route path="/auth/register/:asRole" element={<RegisterScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/gdpr" element={<GDPRScreen />} />

          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
