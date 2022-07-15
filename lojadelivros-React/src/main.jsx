import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Livro from './pages/Livro';
import Pesquisar from './pages/Pesquisar';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import MinhasCompras from './pages/MinhasCompras';
import Favoritos from './pages/Favoritos';





import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> } >
          <Route path='/' element={ <Home /> } />
          <Route path='cadastro' element={ <Cadastro /> } />
          <Route path='livro/:id' element={ <Livro /> } />
          <Route path='pesquisar' element={ <Pesquisar /> } />
          <Route path='carrinho' element={ <Carrinho /> } />
          <Route path='minhascompras' element={ <MinhasCompras /> } />
          <Route path='favoritos' element={ <Favoritos /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
