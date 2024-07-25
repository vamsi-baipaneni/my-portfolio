import './App.scss'
import Topbar from './components/topbar/Topbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from "./components/contact/Contact"

function App() {

  return (
    <div className='App'>
      <Topbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
