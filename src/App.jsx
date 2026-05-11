import { Navbar } from "./layout/Navbar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonial"



function App() {

  return ( 
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  </div>
  )
}

export default App
