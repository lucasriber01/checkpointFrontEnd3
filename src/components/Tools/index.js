import "./styles.css";
import Card from 'react-bootstrap/Card'

const data = [
  {
    id: "1",
    name: "React ",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
  },
  {
    id: "2",
    name: "Bootstrap",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
  },
  {
    id: "3",
    name: "Java",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duke_%28Java_mascot%29_waving.svg/1137px-Duke_%28Java_mascot%29_waving.svg.png",
  },
  {
    id: "4",
    name: "SQL ",
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

export default function Tools() {
  return (

    
    <div className="content-projects" id="tools">
      <h1 className="title-project">Tecnologias</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={150} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>


  );
}
