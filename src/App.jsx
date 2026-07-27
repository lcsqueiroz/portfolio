import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  const [mostrarHeader, setMostrarHeader] = useState(false);
  const [chegouEmProjetos, setChegouEmProjetos] = useState(false);
  const [chegouNoContato, setChegouNoContato] = useState(false);

  return (
    <>
      <Header visivel={mostrarHeader && !chegouNoContato} />
      <Hero escondido={mostrarHeader} />
      <About aoMudarVisibilidade={setMostrarHeader} />
      <Projects aoMudarVisibilidade={setChegouEmProjetos} />
      <Contact
        aoMudarVisibilidade={setChegouNoContato}
        podeAparecer={chegouEmProjetos}
      />
    </>
  );
}
export default App;
