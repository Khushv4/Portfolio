import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto bg-black bg-white-DEFAULT'>
      <h1 className='text-8xl text-black-DEFAULT'> helloo</h1>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
    </main>
  )
}

export default App