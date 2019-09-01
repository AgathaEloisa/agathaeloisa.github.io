import { skills } from './js/skills-data.js';
import { proyects } from './js/proyects-data.js'
import { contact } from './js/contact-data.js';

// skills / itero la data e imprimo logos
    console.log(skills)
    for(let i = 0; i < skills.length; i++){
        document.getElementById('skills').innerHTML += `
    <div class="skills-icons">
    <img src="${skills[i].img}" alt="${skills[i].name}">
    <p>${skills[i].name}</p>
    </div>`;
    }


// Proyects / imprimo proyectos en una tarjeta, lo itero
console.log(proyects[0].title)
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