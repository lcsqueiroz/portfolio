import useProximidadeDoTopo from '../../hooks/useProximidadeDoTopo';
import style from './Contact.module.css';

const contatos = [
  {
    label: 'E-mail',
    valor: 'lqvieira7@gmail.com',
    href: 'mailto:lqvieira7@gmail.com',
  },
  {
    label: 'WhatsApp',
    valor: '(11) 94574-5870',
    href: 'https://wa.me/5511945745870',
  },
  {
    label: 'LinkedIn',
    valor: 'linkedin.com/in/lcsqueiroz',
    href: 'https://linkedin.com/in/lcsqueiroz',
  },
  {
    label: 'GitHub',
    valor: 'github.com/lcsqueiroz',
    href: 'https://github.com/lcsqueiroz',
  },
];

function Contact({ aoMudarVisibilidade, podeAparecer }) {
  const espacadorRef = useProximidadeDoTopo(aoMudarVisibilidade);

  return (
    <>
      <div
        id="contato"
        className={style.espacador}
        ref={espacadorRef}
        aria-hidden="true"
      />
      <section
        className={`${style.contato} ${podeAparecer ? style.visivel : ''}`}
      >
        <div className={style.grid}>
          <h2 className={style.titulo}>Vamos conversar?</h2>
          <p className={style.subtitulo}>
            Estou aberto a novas oportunidades e parcerias. Escolha o canal que
            preferir.
          </p>

          <ul className={style.links}>
            {contatos.map((contato) => {
              const externo = contato.href.startsWith('http');

              return (
                <li key={contato.label}>
                  <a
                    className={style.link}
                    href={contato.href}
                    target={externo ? '_blank' : undefined}
                    rel={externo ? 'noreferrer' : undefined}
                  >
                    <span className={style.label}>{contato.label}</span>
                    <span className={style.valor}>{contato.valor}</span>
                    <span className={style.seta} aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
