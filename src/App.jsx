import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';

function App() {
  const [mostrarHeader, setMostrarHeader] = useState(false);

  return (
    <>
      <Header visivel={mostrarHeader} />
      <Hero />
      <About aoMudarVisibilidade={setMostrarHeader} />
    </>
  );
}
export default App;
