import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <a href="https://www.digitalhouse.com/br" >
      <img src={logo} width={70} />
      </a>
      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          Projetos
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("about")}>
        Sobre
        </li>

        <li className="item-menu" onClick={() => scrollToComponent("contato")}>Contato</li>
      </ul>
    </header>
  );
}
