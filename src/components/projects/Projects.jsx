import style from './Projects.module.css';

const projetos = [
  {
    metrica: '6.000',
    metricaLabel: 'imagens / 30 min',
    titulo: 'Scraping de Imagens',
    tech: 'Node.js',
    link: 'https://github.com/lcsqueiroz/node-scraping',
    descricao:
      'Automação que pesquisa no Bing pelo nome do produto e EAN, trata a imagem e, conforme o score, envia para uma pasta de imagens tratadas ou para análise. Reduziu o tempo operacional e acelerou a captura, sem bloqueios de IP ou restrição do navegador.',
    tags: ['Node.js', 'Bing API', 'Automação'],
  },
  {
    metrica: '<200ms',
    metricaLabel: 'por requisição',
    titulo: 'Análise e Performance em API',
    tech: 'Node.js · desafio Codecon',
    link: 'https://github.com/lcsqueiroz/performance-e-analise-de-dados-via-api',
    descricao:
      'API pensada para 100.000 usuários, com todos os endpoints respondendo abaixo de 200ms. Inclui um endpoint de autoavaliação e foi desenvolvida sem nenhum código gerado por IA — exigência do desafio.',
    tags: ['Node.js', 'REST', 'Performance'],
  },
  {
    metrica: 'Ao vivo',
    metricaLabel: 'hubgc.com.br',
    titulo: 'Rede Social para Profissionais de GC',
    tech: 'React.js',
    link: 'https://hubgc.com.br/',
    descricao:
      'Rede social que conecta profissionais da área de GC, com espaço para troca de experiência e busca de vagas. Responsável por todo o front-end, com foco em componentes otimizados para evitar re-renders desnecessários.',
    tags: ['React.js', 'Front-end', 'Produção'],
  },
];

function Projects() {
  return (
    <section id="projetos" className={style.projetos}>
      <div className={style.grid}>
        <h2 className={style.titulo}>Projetos</h2>

        {projetos.map((projeto) => (
          <article key={projeto.titulo} className={style.projeto}>
            <div className={style.metricaBloco}>
              <span className={style.metrica}>{projeto.metrica}</span>
              <span className={style.metricaLabel}>{projeto.metricaLabel}</span>
            </div>

            <div className={style.conteudo}>
              <h3 className={style.tituloProjeto}>{projeto.titulo}</h3>
              <p className={style.tech}>{projeto.tech}</p>
              <p className={style.descricao}>{projeto.descricao}</p>

              <ul className={style.tags}>
                {projeto.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <a className={style.link} href={projeto.link} target="_blank" rel="noreferrer">
                Ver projeto →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
