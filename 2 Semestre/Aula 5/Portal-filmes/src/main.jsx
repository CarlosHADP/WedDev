import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home"
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from "./pages/MovieDetailPage.jsx"
import MoviesByGenrePage from "./pages/MoviesByGenrePage.jsx"
import GenreListPage from "./pages/GenreListPage.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/movies",
        element: <MovieListPage />
      },
      {
        path: "/movies/:id",
        element: <MovieDetailPage />
      },
      {
        path: "/genre/:id",
        element: <MoviesByGenrePage />
      },
      {
        path: "/genre/",
        element: <GenreListPage />
      },
    ],
  }
])

{
  /* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas}/>
  </StrictMode>
)
