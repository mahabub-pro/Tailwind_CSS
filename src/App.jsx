import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <Analytics />
     <Cards />
     <Footer />
     <Newsletter />
    </>
  )
}

export default App
