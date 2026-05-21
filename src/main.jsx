import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

// Import Bootstrap and CSS
import * as bootstrap from 'bootstrap'
import './index.css'

// Import Default Layout Component
import DefaultLayout from './layout/DefaultLayout.jsx'

// Import Page Components
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import RickMortyPage from './pages/RickMortyPage.jsx'
import PersonalityPage from './pages/PersonalityPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage titlePage={"Home Page"} />} />

          <Route path='/products' element={<ProductsPage titlePage={"Products"} />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />

          <Route path='/about' element={<AboutPage titlePage={"about"} />} />

          <Route path='/rickmorty' element={<RickMortyPage />} />
          <Route path="/personality/:id" element={<PersonalityPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
