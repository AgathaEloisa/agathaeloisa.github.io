import { skills } from './js/skills-data.js';
import { proyects } from './js/proyects-data.js'
import { contact } from './js/contact-data.js';


document.getElementById('root').innerHTML = `
        <!-- vista principal -->
        <a name="inicio">
            <section class="main">
                <div class="title">
                    <h1>Agatha Sáez</br>
                        Desarrolladora Front-end</h1>
                </div>
                <div class="my-photo">
                    <img src="assets/img/yo.jpg" alt="Foto de perfil" />
                </div>
            </section>
        </a>

        <!-- Vista about -->
        <a name="about">
            <section class="about_me">
                <div class="about-text">
                    <h2>Sobre mí</h2>
                    <p> ipsum dolor sit ametl
                        consectetur adipisicing elit. Ut id harum,
                        totam deserunt molestias ipsum architecto
                        amet nihil sit voluptatem labore temporibus
                        libero saepe asperiores sapiente aperiam quos
                        eum tempora? </p>
                </div>
            </section>
        </a>

        <!-- vista Skills -->
        <a name="skills">
            <section class="skills" id="skills">
                <div class="skills-title">
                    <h2>Habilidades técnicas</h2>
                </div>

            </section>
        </a>

        <!-- Vista Proyects -->
        <a name="proyects">
            <section class="proyects" id="proyects">
                <div class="proyects-title">
                    <h2>Mis Proyectos</h2>
                </div>
            </section>
        </a>

        <!-- Vidta contacto -->
        <a name="contact">
            <section class="contact_me" id="contact_me">
                <div class="contact-title">
                    <h2>Contáctame</h2>
                </div> 


            </section>

        <footer> Nezu Project&reg; 🐀</footer>
`

// skills / itero la data e imprimo logos
    for(let i = 0; i < skills.length; i++){
        document.getElementById('skills').innerHTML += `
    <div class="skills-icons">
    <img src="${skills[i].img}" alt="${skills[i].name}">
    <p>${skills[i].name}</p>
    </div>`;
    }


// Proyects / imprimo proyectos en una tarjeta, lo itero
for(let i = 0; i < proyects.length; i++){
document.getElementById('proyects').innerHTML += `
  <div class="card">
    <div class="card-image">
    <span class="card-title">${proyects[i].title}</span>
    <a href="${proyects[i].link}" target="_blank" class="btn-link"><i class="fas fa-link"></i></a>
      <img src="${proyects[i].img}" alt="${proyects[i].title}">
      <div class="card-content">
      <p>${proyects[i].text}</p>
    </div>
    </div>
</div>`;
}

// contact / itero e imprimo la información de contacto
for(let i = 0; i < contact.length; i++){
  document.getElementById('contact_me').innerHTML += `
  <div class="contact-info">
    <a href="${contact[i].link}" target="_blank"><i class="${contact[i].icon}"></i></a>
  <br>
    <p>${contact[i].alt}</p>
  </div>`
}