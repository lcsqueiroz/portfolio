import { useEffect, useRef } from 'react';

const ANTECEDENCIA_PADRAO_EM_PIXELS = 150;

export function useProximidadeDoTopo(
  aoMudarProximidade,
  antecedenciaEmPixels = ANTECEDENCIA_PADRAO_EM_PIXELS,
) {
  const elementoRef = useRef(null);

  useEffect(() => {
    function verificarSeChegouNoTopo() {
      const posicaoDoTopo = elementoRef.current.getBoundingClientRect().top;

      aoMudarProximidade(posicaoDoTopo <= antecedenciaEmPixels);
    }

    verificarSeChegouNoTopo();

    window.addEventListener('scroll', verificarSeChegouNoTopo);

    return () => {
      window.removeEventListener('scroll', verificarSeChegouNoTopo);
    };
  }, [aoMudarProximidade, antecedenciaEmPixels]);

  return elementoRef;
}

export default useProximidadeDoTopo;
