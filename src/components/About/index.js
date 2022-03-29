import "./styles.css";
import background from "../../assets/banner.png";

export default function About() {
  return (
    <main id="about">
<div class="container">

        <img className="d-block w-100" src={background}/>

      <h2 class="bottom-left">Oi meu nome e Jehan</h2>
      <p class="bottom-left">
        Estou no penultimo semestre de Ciência da Computação e trabalho como desenvolvedor Backend
      </p>
    </div>
    </main>
  );
}
