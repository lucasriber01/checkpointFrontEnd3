import React from "react";
import "./styles.css";
import { BsLinkedin, BsFillBasketFill, BsGithub } from "react-icons/bs";




const Footer = () => {
  return (
  
<footer>
<div class="row primary">
  <div class="column about">

  <h3>Site Desenvolvido por : Jehan Lucas Vieira  e Silva</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>


</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="https://www.linkedin.com/in/jehanlucas/"><BsLinkedin size={40} color="#0000FF" /></a>
  <a href="https://github.com/lucasriber01"><BsGithub size={40} color="#0000FF" /></a>


  </div>
   <p>BACKEND III - DIGITAL HOUSE </p>


</div>
</footer>
  );
}

export default Footer;