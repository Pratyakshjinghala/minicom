import { useState,useEffect } from 'react'

import './App.css'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // show loader 1.5s
  }, []);

  return (
    <>
    <NavBar/>
     {loading ? <Loader /> : <Home/>}
    </>
  )
}

export default App
