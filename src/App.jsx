import { useState } from 'react'
import './App.css'
import Applayout from './Applayout'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Technical from './components/TechnicalSkills/TechnicalSkills'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Applayout></Applayout>

      <div className='container'>
        <About></About>
        <Skills></Skills>
        <Technical></Technical>
        <Projects></Projects>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
