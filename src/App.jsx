import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
      <div className="backdrop" aria-hidden="true" />
      <Header visivel={mostrarHeader && !chegouNoContato} />
      <main>
        <Hero escondido={mostrarHeader} />
        <About aoMudarVisibilidade={setMostrarHeader} />
        <Projects aoMudarVisibilidade={setChegouEmProjetos} />
        <Contact
          aoMudarVisibilidade={setChegouNoContato}
          podeAparecer={chegouEmProjetos}
        />
      </main>
      <Analytics />
    </>
  );
}
export default App;
