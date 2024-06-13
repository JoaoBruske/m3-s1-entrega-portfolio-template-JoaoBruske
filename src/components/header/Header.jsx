import logo from "../../assets/portfolio.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className="header__nav">
        <li className="header__item">
          <a>Sobre</a>
        </li>
        <li className="header__item">
          <a>Stack</a>
        </li>
        <li className="header__item">
          <a>Projetos</a>
        </li>
      </nav>
      <a className="button">Contato</a>
    </header>
  );
}
