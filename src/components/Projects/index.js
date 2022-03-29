import "./styles.css";
import Card from 'react-bootstrap/Card'

const data = [
  {
    id: "1",
    name: "Meu ICMS",
    link: "https://www.enap.gov.br/pt/acontece/noticias/enap-e-ministerio-da-economia-divulgam-os-finalistas-da-primeira-fase-dos-desafios-de-acesso-a-credito-e-do-e-commerce",
    image:
      "https://diarural.com.br/wp-content/uploads/2020/11/154672-icms.png",
  },
  {
    id: "2",
    name: "Coletou",
    link: "https://github.com/lucasriber01/Jogo_ambiental_Java_Swing-AWT",
    image:
      "https://vejasp.abril.com.br/wp-content/uploads/2016/12/reciclagem.png",
  },
  {
    id: "3",
    name: "Agenda 2030",
    link: "https://github.com/lucasriber01/ONU",
    image:
      "https://ppgaquicultura.furg.br/images/Imagens/Agenda_2030/AGENDA_2030.png",
  },
  {
    id: "4",
    name: "Minha água",
    link: "",
    image:
      "https://gorgulho.com/wp-content/uploads/2021/11/planeta-agua.jpg",
  },
  {
    id: "5",
    name: "Landing Page - Mama Mia",
    link: "https://github.com/diegodecrescenzo/frontend2-checkpoint1",
    image:
      "https://static.baratocoletivo.com.br/2020/0810/oferta_15970830814459_destaque%201.jpg",
  },
];

export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={350} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>



  );
}
