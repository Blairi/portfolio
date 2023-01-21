import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import LangProvider from './context/LangProvider';

function App() {
  return (
    <LangProvider>
      <div>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </LangProvider>
  );
}

export default App;
