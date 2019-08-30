import { skills } from './js/skills-data.js';
import { proyects } from './js/proyects-data.js'

// skills / itero la data e imprimo logos
    console.log(skills)
    for(let i = 0; i < skills.length; i++){
        document.getElementById('skills').innerHTML += `
    <div class="skills-icons">
    <img src="${skills[i].img}" alt="${skills[i].name}">
    </div>`;
    }


// Proyects / imprimo proyectos en una tarjeta, lo itero
console.log(proyects[0].title)
for(let i = 0; i < proyects.length; i++){
document.getElementById('proyects').innerHTML += `
<div class="row">
<div class="col s12 m6">
  <div class="card">
    <div class="card-image">
      <img src="${proyects[i].img}" alt="${proyects[i].title}">
      <span class="card-title">${proyects[i].title}</span>
      <a href="${proyects[i].link}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>
    <div class="card-content">
      <p>${proyects[i].text}</p>
    </div>
  </div>
</div>
</div>`;
}