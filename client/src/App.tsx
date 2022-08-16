import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import AboutScreen from './components/screens/AboutScreen'
import BeersScreen from './components/screens/BeersScreen'
import BrewerBeerFormScreen from './components/screens/BrewerBeerFormScreen'
import BrewerBeersScreen from './components/screens/BrewerBeersScreen'
import BrewerHomeScreen from './components/screens/BrewerHomeScreen'
import ChampionsScreen from './components/screens/ChampionsScreen'
import ClientHomeScreen from './components/screens/ClientHomeScreen'
import ContactScreen from './components/screens/ContactScreen'
import GDPRScreen from './components/screens/GDPRScreen'
import HomeScreen from './components/screens/HomeScreen'
import LoginFirstScreen from './components/screens/LoginFirstScreen'
import LoginFormScreen from './components/screens/LoginFormScreen'
import LogoutScreen from './components/screens/LogoutScreen'
import NoMatchScreen from './components/screens/NoMatchScreen'
import RegisterFirstScreen from './components/screens/RegisterFirstScreen'
import RegisterFormScreen from './components/screens/RegisterFormScreen'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/auth/login" element={<LoginFirstScreen />} />
          <Route path="/auth/login/:asRole" element={<LoginFormScreen />} />
          <Route path="/auth/register" element={<RegisterFirstScreen />} />
          <Route path="/auth/register/:asRole" element={<RegisterFormScreen />} />
          <Route path="/champions" element={<ChampionsScreen />} />
          <Route path="/beers" element={<BeersScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/gdpr" element={<GDPRScreen />} />

          <Route path="/client" element={<ClientHomeScreen />} />

          <Route path="/brewer" element={<BrewerHomeScreen />} />
          <Route path="/brewer/beers" element={<BrewerBeersScreen />} />
          <Route path="/brewer/beers/add" element={<BrewerBeerFormScreen />} />

          <Route path="/auth/logout" element={<LogoutScreen />} />

          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
