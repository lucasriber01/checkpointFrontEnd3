import "./styles.css";
import Card from 'react-bootstrap/Card'

const data = [
  {
    id: "1",
    name: "Meu ICMS",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://diarural.com.br/wp-content/uploads/2020/11/154672-icms.png",
  },
  {
    id: "2",
    name: "Coletou",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://vejasp.abril.com.br/wp-content/uploads/2016/12/reciclagem.png",
  },
  {
    id: "3",
    name: "Agenda 2030",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://ppgaquicultura.furg.br/images/Imagens/Agenda_2030/AGENDA_2030.png",
  },
  {
    id: "4",
    name: "Minha água",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://gorgulho.com/wp-content/uploads/2021/11/planeta-agua.jpg",
  },
  {
    id: "5",
    name: "Landing Page - Mama Mia",
    link: "https://github.com/brunowbbs/Frontend-III",
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
