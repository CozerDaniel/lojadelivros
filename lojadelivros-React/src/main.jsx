import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Livro from './pages/Livro';
import Pesquisar from './pages/Pesquisar';




import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> } >
          <Route path='/' element={ <Home /> } />
          <Route path='livro/:id' element={ <Livro /> } />
          <Route path='pesquisar' element={ <Pesquisar /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
