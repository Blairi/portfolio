import { NavBar } from './components';
import LangProvider from './context/LangProvider';
import { About, Contact, Education, Experience, Home, Skills, Work } from './pages';

function App() {
  return (
    <LangProvider>

      <NavBar />

      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Work />
      <Contact />

    </LangProvider>
  );
}

export default App;
