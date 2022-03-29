import React from "react";
import background from "../../assets/banner.png";
import "./styles.css";


export default function Start() {
    return (
      <main id="about">

        <div class="container">
          <img className="d-block w-100" src={background}/>
              <div class="text-block">
              <h4>Jehan Lucas </h4>
              <p>Desenvolvedor Java - Junior</p>
         </div>
         </div>
         </main>
      );
    }
;
