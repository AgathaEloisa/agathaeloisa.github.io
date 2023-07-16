import { skills } from './js/skills-data.js';
import { proyects } from './js/proyects-data.js'
import { contact } from './js/contact-data.js';

const aboutLi = document.getElementById('go_about');
const contactLi = document.getElementById('go_contact');
const skillsLi = document.getElementById('go_skills');
const projectsLi = document.getElementById('go_proyects');

// contact / itero e imprimo la información de contacto
for(let i = 0; i < contact.length; i++){
    document.getElementById('contact').innerHTML += `
        <div class="contact-info">
            <div class="contact_icon">
                <a href="${contact[i].link}" target="_blank">
                    <i class="${contact[i].icon}"></i>
                    <p class="text-over">${contact[i].alt}</p>
                </a>
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
            <a class="demo" href="${proyects[i].link}" target="blank">DEMO</a>
            <a class="repo" href="${proyects[i]["github-link"]}" target="blank"><i class="${contact[1].icon}"></i></a>
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
                <img class="${skills[i].class}" src="${skills[i].img}" alt="${skills[i].name}">
            </div>
                <p>${skills[i].name}</p>
        </div>`;
};

// for(let i = 0; i < skills.length; i++){
//     document.getElementById('skills').innerHTML += `
//         <div class="icon_skills">
//             <div class="skills_img">
//             <i class="${skills[i].icon}">${skills[i].name}</i>
//             </div>
//                 <p>${skills[i].name}</p>
//         </div>`;
// };

// agrego clase para el despliegue de menú
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav_bar_menu').classList.toggle('open');
    // agrego clase para efecto en el despliegue de menú
    document.getElementById('menu-toggle').classList.toggle('menu-open');
 });

//  Posición del scroll en pantalla BOM
 window.onscroll = () => {
    window.scrollY >= 440 ? 
    document.getElementById('up').className = 'up'
    : document.getElementById('up').className = '';

    if( window.scrollY >= 1360) {
        skillsLi.className = 'section';
        aboutLi.className = '';
        contactLi.className = '';
        projectsLi.className = '';
    }
    else if( window.scrollY >= 1144 && window.scrollY <= 1359 ) {
        projectsLi.className = 'section';
        contactLi.className = '';
        skillsLi.className = '';
        aboutLi.className = '';
    }
    else if( window.scrollY >= 261 && window.scrollY <= 1143 ) {
        aboutLi.className = 'section';
        skillsLi.className = '';
        projectsLi.className = '';
        contactLi.className = '';
    } else if( window.scrollY >= 0 && window.scrollY <= 260 ) {
        contactLi.className = 'section';
        aboutLi.className = '';
        projectsLi.className = '';
        skillsLi.className = '';
    }
 };

//  document.getElementById('cv_download').addEventListener('click', () => {
//     if(document.getElementById('options').style.display === 'none') {
//     document.getElementById('options').style.display = 'block';
// } else {
//     document.getElementById('options').style.display = 'none';
// }
//  })