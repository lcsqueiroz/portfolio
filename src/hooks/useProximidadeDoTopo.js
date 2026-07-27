import { useEffect, useRef } from 'react';

const ANTECEDENCIA_PADRAO_EM_PIXELS = 150;

export function useProximidadeDoTopo(
  aoMudarProximidade,
  antecedenciaEmPixels = ANTECEDENCIA_PADRAO_EM_PIXELS,
) {
  const elementoRef = useRef(null);

  useEffect(() => {
    let quadroJaAgendado = false;

    function verificarSeChegouNoTopo() {
      const posicaoDoTopo = elementoRef.current.getBoundingClientRect().top;

      aoMudarProximidade(posicaoDoTopo <= antecedenciaEmPixels);
      quadroJaAgendado = false;
    }

    function aoRolar() {
      if (quadroJaAgendado) return;

      quadroJaAgendado = true;
      requestAnimationFrame(verificarSeChegouNoTopo);
    }

    aoRolar();

    window.addEventListener('scroll', aoRolar, { passive: true });

    return () => {
      window.removeEventListener('scroll', aoRolar);
    };
  }, [aoMudarProximidade, antecedenciaEmPixels]);

  return elementoRef;
}

export default useProximidadeDoTopo;
