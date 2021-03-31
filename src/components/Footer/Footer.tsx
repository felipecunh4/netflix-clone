import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p>Feito por Felipe Cunha</p>
      <p>Direitos de imagem para Netflix</p>
      <p>Dados pego do site themoviedb.com.org</p>
    </footer>
  );
};

export default Footer;
