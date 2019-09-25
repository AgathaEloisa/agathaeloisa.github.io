import { skills } from './js/skills-data.js';
import { proyects } from './js/proyects-data.js'
import { contact } from './js/contact-data.js';

// contact / itero e imprimo la información de contacto
for(let i = 0; i < contact.length; i++){
    document.getElementById('contact').innerHTML += `
        <div class="contact-info">
            <div class="contact_icon">
                <a href="${contact[i].link}" target="_blank"><i class="${contact[i].icon}"></i></a>
            </div>
        </div>`;
  };
  
// Proyects / imprimo proyectos en una tarjeta, lo itero
for(let i = 0; i < proyects.length; i++){
    document.getElementById('proyects').innerHTML += `
    <div class="card-container">
<div class="card" >
    <div class="front-card">
        <img src="${proyects[i].img}" alt="${proyects[i].title}">
    </div>
    <div class="back-card">
            <h3>${proyects[i].title}</h3>
            <a class="demo" href="${proyects[i]["github-link"]}" target="blank">DEMO</a>
            <a class="repo" href="${proyects[i].link}" target="blank"><i class="${contact[1].icon}"></i></a>
            <p>${proyects[i].text}</p>
    </div>
</div>
</div>
`;
};

// skills / itero la data e imprimo logos
for(let i = 0; i < skills.length; i++){
    document.getElementById('skills').innerHTML += `
        <div class="icon_skills">
            <div class="skills_img">
                <img src="${skills[i].img}" alt="${skills[i].name}">
            </div>
                <p>${skills[i].name}</p>
        </div>`;
};

// agrego clase para el despliegue de menú
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav_bar_menu').classList.toggle('open');
    // agrego clase para efecto en el despliegue de menú
    document.getElementById('menu-toggle').classList.toggle('menu-open');
 });