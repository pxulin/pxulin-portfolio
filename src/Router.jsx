import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Setup from './pages/Setup';

function RoutesApp() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/setup' element={<Setup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;