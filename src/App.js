import "./styles.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Start from "./components/Start";
import Contato from "./components/Contato";
import Footer from "./components/Footer"; 
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Start/>
      <Projects />
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
