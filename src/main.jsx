import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './Responsive.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Technology from './components/Technology'
import Marque from './components/Marque'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Fixedmenu from './components/Fixedmenu'
import Htmlquiz from './components/Htmlquiz'
import Singup from './components/Singup'
import Quizsection from './components/Quizsection'
import Cquiz from './components/Cquiz'
import Pyquiz from './components/Pyquiz'
import Login from './components/Login'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <><Home /> <Marque /><Technology /> <About /> <Quizsection />  </>
      },
      {
        path: 'technology',
        element: <Technology />,
        children: [
          {
            path:"guessgame",
            element: <About />
          }
        ]
      },
      {
        path: 'quiz',
        element: <Quizsection />
      },
      {
        path: 'about',
        element: <About /> 
      },
      {
        path: 'htmlquiz',
        element: <Htmlquiz /> 
      },
      {
        path: 'Cquiz',
        element: <Cquiz /> 
      },
      {
        path: 'pyquiz',
        element: <Pyquiz /> 
      },
      {
        path: 'singup',
        element: <Singup />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
