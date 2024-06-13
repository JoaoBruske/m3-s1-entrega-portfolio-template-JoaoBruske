import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <h2 className="title2">Contato</h2>
        <div className="icons__container">
          <a>
            <img src={whatsappIcon} alt="Whatsapp" />
          </a>
          <a>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a>
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
        <p className="paragraph">Todos os direitos reservados - José da Silva</p>
    </footer>
  );
}
