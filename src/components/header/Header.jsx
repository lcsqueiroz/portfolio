import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <span className={style.name}>Lucas Queiroz</span>

      <nav className={style.nav}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

      <div className={style.social}>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </header>
  );
}

export default Header;
