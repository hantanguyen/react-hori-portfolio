import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; 
import Technologies from "./components/Technologies"; 
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neautral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#4169E1_100%)]"></div> */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </div>
  )
}

export default App;