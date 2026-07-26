import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  const [mostrarHeader, setMostrarHeader] = useState(false);

  return (
    <>
      <Header visivel={mostrarHeader} />
      <Hero escondido={mostrarHeader} />
      <About aoMudarVisibilidade={setMostrarHeader} />
      <Projects />
    </>
  );
}
export default App;
