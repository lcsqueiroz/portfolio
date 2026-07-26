import { useEffect, useRef } from 'react';
import style from './About.module.css';

const ANTECEDENCIA_EM_PIXELS = 150;

const linhaDoTempo = [
  {
    periodo: '2023–2024',
    cargo: 'Aprendiz de TI',
    empresa: 'Gocil Tecnologia',
    destaque: 'Liderou a implementação do sistema de chamados GLPI.',
  },
  {
    periodo: '2024–2026',
    cargo: 'Assistente de TI',
    empresa: 'Gocil Tecnologia',
    destaque: 'Sustentação do ERP Totvs RM e automação de processos internos.',
  },
  {
    periodo: '2026–atual',
    cargo: 'Estagiário Front-end',
    empresa: 'Maví Click',
    destaque: 'Desenvolve o front-end da Hub (hubgc.com.br) com React.js.',
  },
];

function About({ aoMudarVisibilidade }) {
  const secaoRef = useRef(null);

  useEffect(() => {
    function verificarSeChegouNoTopo() {
      const posicaoDoTopo = secaoRef.current.getBoundingClientRect().top;

      if (posicaoDoTopo <= ANTECEDENCIA_EM_PIXELS) {
        aoMudarVisibilidade(true);
      } else {
        aoMudarVisibilidade(false);
      }
    }

    verificarSeChegouNoTopo();

    window.addEventListener('scroll', verificarSeChegouNoTopo);

    return () => {
      window.removeEventListener('scroll', verificarSeChegouNoTopo);
    };
  }, [aoMudarVisibilidade]);

  return (
    <section id="sobre" ref={secaoRef} className={style.sobre}>
      <div className={style.grid}>
        <h2 className={style.titulo}>Sobre mim</h2>

        <div className={style.texto}>
          <p>
            Comecei minha trajetória em tecnologia pela infraestrutura: gestão
            de ativos, acessos via Active Directory e sustentação de um ERP
            Totvs RM, na Gocil. Foi automatizando processos e tratando dados via
            SQL que percebi que queria estar do lado de quem constrói os
            sistemas, não só de quem os mantém.
          </p>
          <p>
            Hoje sou estagiário de desenvolvimento na Maví Click, onde
            desenvolvo e mantenho o front-end da Hub (hubgc.com.br) com React.js
            — do consumo de APIs à otimização de componentes. Em paralelo, curso
            Análise e Desenvolvimento de Sistemas e mantenho projetos pessoais
            em Node.js, sempre buscando entender o "porquê" por trás de cada
            escolha técnica.
          </p>
        </div>

        <ul className={style.meta}>
          <li>
            <span>Localização</span>
            São Paulo, SP
          </li>
          <li>
            <span>Cargo atual</span>
            Front-end @ Maví Click
          </li>
          <li>
            <span>Formação</span>
            Tecnólogo em ADS · 2025–2027
          </li>
          <li>
            <span>Stack</span>
            React.js, Node.js, JavaScript, SQL
          </li>
        </ul>

        <ol className={style.linhaDoTempo}>
          {linhaDoTempo.map((passo) => (
            <li key={passo.cargo} className={style.passo}>
              <span className={style.passoPeriodo}>{passo.periodo}</span>
              <strong className={style.passoCargo}>{passo.cargo}</strong>
              <span className={style.passoEmpresa}>{passo.empresa}</span>
              <p className={style.passoDestaque}>{passo.destaque}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default About;
