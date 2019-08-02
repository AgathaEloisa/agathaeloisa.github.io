// main / Título y fotografía
window.onload
let mainTemplate = document.getElementById('root').innerHTML =

    `<section class="main">
<div class="title">
    <h1>Agatha Sáez<h1>
    <h1>Front-end Developer</h1>
</div>
<img src="img/yo.jpg" alt="Foto de perfil">
</section>`;

//about / Una descripción mía
let aboutTemplate = document.getElementById('btn_about').addEventListener('click', () => {
    document.getElementById('root').innerHTML =

    `<!-- <a name="about_me"></a> -->
<section class="about_me">
    <h2>About me</h2>
    <p> ipsum dolor sit amet
        consectetur adipisicing elit. Ut id harum,
        totam deserunt molestias ipsum architecto
        amet nihil sit voluptatem labore temporibus
        libero saepe asperiores sapiente aperiam quos
        eum tempora? </p>
</section>
<!-- </a> -->`;
})

// proyectos / Dónde se muestran mis proyectos
let proyectsTemplate = document.getElementById('btn_proyects').addEventListener('click', () =>{
    document.getElementById('root').innerHTML =

    `<!-- <a name="proyects"> -->
<section class="proyects">
    <h2>Mis Proyectos</h2>
    <p> ipsum dolor sit amet
        consectetur adipisicing elit. Ut id harum,
        totam deserunt molestias ipsum architecto
        amet nihil sit voluptatem labore temporibus
        libero saepe asperiores sapiente aperiam quos
        eum tempora? </p>
</section>
<!-- </a> -->`;
})

// skills / Prsento mis habilidades
let skillsTemplate = document.getElementById('btn_skills').addEventListener('click', () => {
    document.getElementById('root').innerHTML =

    ` <!-- <a name="skills"> -->
<section class="skills">
    <h2>Skills</h2>
    <p> ipsum dolor sit amet
        consectetur adipisicing elit. Ut id harum,
        totam deserunt molestias ipsum architecto
        amet nihil sit voluptatem labore temporibus
        libero saepe asperiores sapiente aperiam quos
        eum tempora? </p>
</section>
<!-- </a> -->`;
})

// contacto / Formas para contactarse conmigo
let contactTemplate = document.getElementById('btn_contact').addEventListener('click',() => {
    document.getElementById('root').innerHTML = 

    `<!-- <a name="contact_me"> -->
    <section class="contact_me">
        <h2>Contacto</h2>
        <div>
            <h4>Teléfono: +56952425174</h4>
            <h4>Email: <a href="mailto:">ebrumaktub@gmx.com</a></h4>
        </div>
    </section>
    <!-- </a> -->`;
})

// Template de inicio / mi foto
let returnMainTemplate = document.getElementById('btn_main').addEventListener('click', () => {
    document.getElementById('root').innerHTML = mainTemplate;
})