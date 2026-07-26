import style from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={style.heroSpacer} aria-hidden="true" />
      <section className={style.hero}>
        <h1 className={style.name}>Lucas Queiroz</h1>
        <p className={style.role}>Desenvolvedor Front-end</p>

        <p className={style.bio}>
          Desenvolvedor Front-end com experiência em produção usando React.js,
          consumo de APIs REST e fluxo Git/GitHub em metodologia ágil Scrum.
        </p>

        <a className={style.cta} href="/cv/lucas-queiroz-vieira.pdf" download>
          Baixar Currículo
        </a>

        <ul className={style.stack}>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </section>
    </>
  );
}

export default Hero;
