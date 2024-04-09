import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Suspense, lazy} from 'react'
const App = lazy(()=> import('./App.jsx')) 
const About = lazy(()=> import('./pages/About.jsx')) 
const NotFound = lazy(()=> import('./pages/NotFound.jsx')) 
import Loader from './components/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <Router>
        <Routes> 
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
          
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>,
)
